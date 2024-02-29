// app/lib/actions.ts
'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  extractDateTimePairs_Create,
  extractDateTimePairs_Update,
} from '@/lib/utils';
import { PresenterFields, ShowFields } from './definitions';

// PRESENTERS
const PresenterFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  contact_name: z.string(),
  contact_email: z.string(),
  contact_phone: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

const CreatePresenter = PresenterFormSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export async function createPresenter(formData: FormData) {
  const { name, location, contact_name, contact_email, contact_phone } =
    CreatePresenter.parse({
      name: formData.get('name'),
      location: formData.get('location'),
      contact_name: formData.get('contact_name'),
      contact_email: formData.get('contact_email'),
      contact_phone: formData.get('contact_phone'),
    });

  await sql`
    INSERT INTO tour_presenters ( name, location, contact_name, contact_email, contact_phone )
    VALUES (${name}, ${location}, ${contact_name}, ${contact_email}, ${contact_phone})
    `;

  revalidatePath('/tour/presenters');
  redirect('/tour/presenters');
}

export async function deletePresenter(id: string) {
  await sql`DELETE FROM tour_presenters WHERE id = ${id}`;
  revalidatePath('/tour/presenters');
}

const UpdatePresenter = PresenterFormSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export async function updatePresenter(id: string, formData: FormData) {
  const { name, location, contact_name, contact_email, contact_phone } =
    UpdatePresenter.parse({
      name: formData.get('name'),
      location: formData.get('location'),
      contact_name: formData.get('contact_name'),
      contact_email: formData.get('contact_email'),
      contact_phone: formData.get('contact_phone'),
    });

  await sql<PresenterFields>`
    UPDATE tour_presenters
    SET 
    name = ${name}, 
    location = ${location},
    contact_name = ${contact_name},
    contact_email = ${contact_email},
    contact_phone = ${contact_phone}
    WHERE
    tour_presenters.id = ${id}
    `;
  revalidatePath('/tour/presenters');
  redirect('/tour/presenters');
}

// SHOWS
const ShowFormSchema = z.object({
  id: z.string(),
  show_title: z.string(),
  short_description: z.string(),
  long_description: z.string(),
  running_time_in_minutes: z.number(),
  num_intermissions: z.number(),
  cast_size: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
});

const CreateShow = ShowFormSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});
FormData;
export async function createShow(formData: FormData) {
  const {
    show_title,
    running_time_in_minutes,
    num_intermissions,
    cast_size,
    short_description,
    long_description,
  } = CreateShow.parse({
    show_title: formData.get('show_title'),
    running_time_in_minutes:
      Number(formData.get('running_time_in_minutes')) || 0,
    num_intermissions: Number(formData.get('num_intermissions')) || 0,
    cast_size: Number(formData.get('cast_size')) || 1,
    short_description: formData.get('short_description') || '',
    long_description: formData.get('long_description') || '',
  });

  await sql`
    INSERT INTO tour_shows ( show_title, running_time_in_minutes, num_intermissions, cast_size, short_description, long_description )
    VALUES (${show_title}, ${running_time_in_minutes}, ${num_intermissions}, ${cast_size}, ${short_description}, ${long_description} )
    `;

  revalidatePath('/tour/shows');
  redirect('/tour/shows');
}

export async function deleteShow(id: string) {
  await sql`DELETE FROM tour_shows WHERE id = ${id}`;
  revalidatePath('/tour/shows');
}

export async function updateShow(id: string, formData: FormData) {
  const {
    show_title,
    running_time_in_minutes,
    num_intermissions,
    cast_size,
    short_description,
    long_description,
  } = CreateShow.parse({
    show_title: formData.get('show_title'),
    running_time_in_minutes:
      Number(formData.get('running_time_in_minutes')) || 0,
    num_intermissions: Number(formData.get('num_intermissions')) || 0,
    cast_size: Number(formData.get('cast_size')) || 1,
    short_description: formData.get('short_description') || '',
    long_description: formData.get('long_description') || '',
  });

  await sql<ShowFields>`
    UPDATE tour_shows
    SET 
    show_title = ${show_title}, 
    running_time_in_minutes = ${running_time_in_minutes},
    num_intermissions = ${num_intermissions},
    cast_size = ${cast_size},
    short_description = ${short_description},
    long_description = ${long_description}
    WHERE
    id = ${id}
    `;

  revalidatePath('/tour/shows');
  redirect('/tour/shows');
}

// BOOKINGS
const BookingSchema = z.object({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  presenter_id: z.string(),
  show_id: z.string(),
  fee: z.number(),
  payment_status: z.string(),
  // performances: z.array(PerformanceSchema),
});

const CreateBooking = BookingSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export async function createBooking(formData: FormData) {
  const { presenter_id, show_id, fee, payment_status } = CreateBooking.parse({
    presenter_id: formData.get('presenter_id'),
    show_id: formData.get('show_id'),
    fee: Number(formData.get('fee')),
    payment_status: formData.get('payment_status'),
  });

  const entriesData = Object.fromEntries(formData.entries());
  const performances = await extractDateTimePairs_Create(entriesData);
  console.log('PERFORMANCES', performances);
  const bookingResult = await sql`
      INSERT INTO tour_bookings (presenter_id, show_id, fee, payment_status)
      VALUES (${presenter_id}, ${show_id}, ${fee}, ${payment_status})
      RETURNING id
    `;
  const bookingId = bookingResult.rows[0].id;
  console.log('BOOKING ID', bookingId);

  for (const performance of performances) {
    await sql`
    INSERT INTO tour_performances (date_time, show_id, presenter_id, booking_id)
    VALUES (${performance}, ${show_id}, ${presenter_id}, ${bookingId})
    `;
  }

  revalidatePath('/tour/bookings');
  redirect('/tour/bookings');
}

export async function deleteBooking(id: string) {
  try {
    await sql`DELETE FROM tour_performances tp WHERE tp.booking_id = ${id}`;
    await sql`DELETE FROM tour_bookings WHERE id = ${id}`;
    revalidatePath('/tour/bookings');
  } catch (error) {
    console.error('Database error:', error);
    throw new Error(`Failed to delete booking with Id: ${id}`);
  }
}

const UpdateBooking = BookingSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export async function updateBooking(id: string, formData: FormData) {
  const { presenter_id, show_id, fee, payment_status } = UpdateBooking.parse({
    presenter_id: formData.get('presenter_id'),
    show_id: formData.get('show_id'),
    fee: Number(formData.get('fee')),
    payment_status: formData.get('payment_status'),
  });

  const entriesData = Object.fromEntries(formData.entries());
  const performances: { id: string; dateTime: string }[] =
    await extractDateTimePairs_Update(entriesData);
  // console.log('PERFORMANCES', performances);

  await sql`
  UPDATE tour_bookings
  SET 
    presenter_id = ${presenter_id},
    show_id = ${show_id},
    fee = ${fee},
    payment_status = ${payment_status}
  WHERE
  id = ${id}
  `;

  for (const performance of performances) {
    await sql`
    UPDATE tour_performances
    SET 
    date_time = ${performance.dateTime}
    WHERE
    id = ${performance.id}
    `;
  }

  revalidatePath('/tour/bookings');
  redirect('/tour/bookings');
}

export async function deletePerformance(id: string) {
  await sql`DELETE FROM tour_performances WHERE id = ${id}`;
  revalidatePath('/tour/bookings');
}

export async function updatePerformance(id: string, formData: FormData) {
  const date = formData.get('date');
  console.log('DATE', date);
  const time = formData.get('time');
  console.log('TIME', time);
  const dateTimeString = `${date}T${time}:000`;

  await sql`
  UPDATE tour_performances
  SET 
  date_time = ${dateTimeString}
  WHERE
  id = ${id}
  `;

  revalidatePath('/tour/bookings');
  redirect('/tour/bookings');
}
