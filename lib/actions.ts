// app/lib/actions.ts
'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { extractDateTimePairs } from '@/lib/utils';
import { PresenterFields } from './definitions';

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
  const { show_title, running_time_in_minutes, num_intermissions, cast_size } =
    CreateShow.parse({
      show_title: formData.get('show_title'),
      running_time_in_minutes:
        Number(formData.get('running_time_in_minutes')) || 0,
      num_intermissions: Number(formData.get('num_intermissions')) || 0,
      cast_size: Number(formData.get('cast_size')) || 1,
    });

  await sql`
    INSERT INTO tour_shows ( show_title, running_time_in_minutes, num_intermissions, cast_size )
    VALUES (${show_title}, ${running_time_in_minutes}, ${num_intermissions}, ${cast_size} )
    `;

  revalidatePath('/tour/shows');
  redirect('/tour/shows');
}

export async function deleteShow(id: string) {
  await sql`DELETE FROM tour_shows WHERE id = ${id}`;
  revalidatePath('/tour/shows');
}

const UpdateShow = ShowFormSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export async function updateShow(id: string, formData: FormData) {
  const { show_title, running_time_in_minutes, num_intermissions, cast_size } =
    UpdateShow.parse({
      show_title: formData.get('show_title'),
      running_time_in_minutes: Number(formData.get('running_time_in_minutes')),
      num_intermissions: Number(formData.get('num_intermissions')),
      cast_size: Number(formData.get('cast_size')),
    });

  await sql`
    UPDATE tour_shows
    SET 
    show_title = ${show_title}, running_time_in_minutes = ${running_time_in_minutes},
    num_intermissions = ${num_intermissions},
    cast_size = ${cast_size}
    WHERE
    id = ${id}
    `;

  revalidatePath('/tour/shows');
  redirect('/tour/shows');
}

// BOOKINGS
const BookingFormData = z.object({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  presenter_id: z.string(),
  show_id: z.string(),
  fee: z.number(),
  payment_status: z.string(),
  performances: z.date().array(),
});

const CreateBooking = BookingFormData.omit({
  id: true,
  created_at: true,
  updated_at: true,
  performances: true,
});

export async function createBooking(formData: FormData) {
  const { presenter_id, show_id, fee, payment_status } = CreateBooking.parse({
    presenter_id: formData.get('presenter_id'),
    show_id: formData.get('show_id'),
    fee: Number(formData.get('fee')),
    payment_status: formData.get('payment_status'),
  });

  const entriesData = Object.fromEntries(formData.entries());
  const performances = await extractDateTimePairs(entriesData);
  console.log('PERFORMANCES', performances);
  const bookingResult = await sql`
      INSERT INTO tour_bookings (presenter_id, show_id, fee, payment_status)
      VALUES (${presenter_id}, ${show_id}, ${fee}, ${payment_status})
      RETURNING id
    `;
  const bookingId = bookingResult.rows[0].id;
  console.log('BOOKING ID', bookingId);

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

export async function updateBooking(id: string, formData: FormData) {
  return;
}
