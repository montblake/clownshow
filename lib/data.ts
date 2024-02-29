// lib/data.ts

'use server';

import { sql } from '@vercel/postgres';
import {
  PresenterFields,
  BookingFields,
  ShowFields,
  Performance,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

// PRESENTERS
const PRESENTERS_PER_PAGE = 12;

export const fetchPresentersPages = async (query: string) => {
  noStore();
  try {
    const count = await sql`
      SELECT COUNT(*)
        FROM tour_presenters tpr
      WHERE
        tpr.name ILIKE ${`%${query}%`} OR
        tpr.location ILIKE ${`%${query}%`} OR
        tpr.contact_name ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(
      Number(count.rows[0].count) / PRESENTERS_PER_PAGE,
    );
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of presenters.');
  }
};

export const fetchFilteredPresenters = async (
  query: string,
  currentPage: number,
) => {
  const offset = (currentPage - 1) * PRESENTERS_PER_PAGE;
  noStore();
  try {
    const presenters = await sql<PresenterFields>`
      SELECT
        tpr.id,
        tpr.name,
        tpr.location,
        tpr.contact_name,
        tpr.contact_email,
        tpr.contact_phone      
      FROM tour_presenters tpr
      WHERE
        tpr.name ILIKE ${`%${query}%`} OR
        tpr.location ILIKE ${`%${query}%`} OR
        tpr.contact_name ILIKE ${`%${query}%`}
      ORDER BY tpr.name
      LIMIT ${PRESENTERS_PER_PAGE} OFFSET ${offset}
    `;
    return presenters.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered presenters.');
  }
};

// export const fetchPresenterById = async (id: string) => {
//   noStore();
//   try {
//     const presenter = await sql<Presenter>`
//       SELECT *
//       FROM tour_presenters
//       WHERE tour_presenters.id = ${id}
//     `;
//     return presenter.rows[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error(`Failed to fetch presenter by ID: ${id}`);
//   }
// };

// SHOWS
export const fetchShows = async () => {
  noStore();
  try {
    const shows = await sql<ShowFields>`
      SELECT
            ts.id,
            ts.show_title,
            ts.short_description,
            ts.running_time_in_minutes,
            ts.num_intermissions,
            ts.cast_size,
            ts.long_description
          FROM tour_shows ts
          ORDER BY ts.show_title
        `;
    console.log('SHOWS:', shows.rows[0].long_description);
    return shows.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch shows.');
  }
};

export const fetchShowById = async (id: string) => {
  noStore();
  console.log('SHOW ID', id);
  try {
    const show = await sql<ShowFields>`
      SELECT
        ts.id,
        ts.show_title,
        ts.short_description,
        ts.running_time_in_minutes,
        ts.num_intermissions,
        ts.cast_size,
        ts.long_description
      FROM tour_shows ts
      WHERE ts.id = ${id}
    `;
    return show.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch show with ID: ${id}`);
  }
};

// BOOKINGS
const BOOKINGS_PER_PAGE = 6;
export const fetchFilteredBookings = async (
  query: string,
  currentPage: number,
) => {
  const offset = (currentPage - 1) * BOOKINGS_PER_PAGE;
  noStore();
  try {
    const data = await sql<BookingFields>`
      SELECT
        tb.id,
        tb.created_at,
        tb.updated_at,
        tb.fee,
        tb.payment_status,
        tb.created_at,
        tb.updated_at,
        ts.id AS show_id,
        ts.show_title AS show_title,
        tpr.id AS presenter_id,
        tpr.name AS presenter_name,
        tpr.location AS presenter_location,
        tpr.contact_name AS presenter_contact,
        json_agg(json_build_object('id', tp.id, 'date_time', tp.date_time)) AS performances
      FROM tour_bookings tb
      JOIN tour_presenters tpr ON tb.presenter_id=tpr.id
      JOIN tour_shows ts ON tb.show_id=ts.id
      LEFT JOIN tour_performances tp ON tp.booking_id=tb.id
      WHERE
        tb.payment_status ILIKE ${`%${query}%`} OR
        show_title ILIKE ${`%${query}%`} OR
        tpr.name ILIKE ${`%${query}%`} OR
        tpr.location ILIKE ${`%${query}%`} OR
        tpr.contact_name ILIKE ${`%${query}%`}
      GROUP BY tb.id, ts.id, ts.show_title, tpr.id, tpr.name, tpr.location, tpr.contact_name
      ORDER BY tpr.name
      LIMIT ${BOOKINGS_PER_PAGE} OFFSET ${offset}
    `;
    const filteredBookings = data.rows;

    console.log('FILTERED BOOKINGS', filteredBookings);
    return filteredBookings;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch bookings data.');
  }
};

export const fetchBookingsPages = async (query: string) => {
  noStore();
  try {
    const count = await sql`
      WITH FilteredBookings AS (
        SELECT
          tb.id
        FROM
          tour_bookings tb
        JOIN tour_presenters tpr ON tb.presenter_id=tpr.id
        JOIN tour_shows ts ON tb.show_id=ts.id
        WHERE
          tb.payment_status ILIKE ${`%${query}%`} OR
          ts.show_title ILIKE ${`%${query}%`} OR
          tpr.name ILIKE ${`%${query}%`} OR
          tpr.location ILIKE ${`%${query}%`} OR
          tpr.contact_name ILIKE ${`%${query}%`}
  
      )
      SELECT COUNT(*) AS total_bookings
      FROM FilteredBookings;
    `;
    const totalPages = Math.ceil(
      Number(count.rows[0].total_bookings) / BOOKINGS_PER_PAGE,
    );
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of bookings.');
  }
};

export const fetchBookingOptions = async () => {
  noStore();
  try {
    const presentersPromise = sql<Presenter>`SELECT * FROM tour_presenters`;
    const showsPromise = sql<Show>`SELECT * FROM tour_shows`;
    const data = await Promise.all([presentersPromise, showsPromise]);

    const presenters = data[0].rows;
    const shows = data[1].rows;
    return {
      presenters,
      shows,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Booking Options.');
  }
};

export const fetchBookingById = async (id: string) => {
  noStore();
  try {
    const booking = await sql<BookingFields>`
    SELECT
      tb.id,
      tb.fee,
      tb.payment_status,
      tb.show_id,
      ts.show_title AS show_title,
      tb.presenter_id,
      tpr.name AS presenter_name,
      tpr.location AS presenter_location,
      tpr.contact_name AS presenter_contact,
      array_agg(tp.id) AS performances
    FROM tour_bookings tb
    JOIN tour_presenters tpr ON tb.presenter_id=tpr.id
    JOIN tour_shows ts ON tb.show_id=ts.id
    LEFT JOIN tour_performances tp ON tp.booking_id=tb.id 
    WHERE
      tb.id = ${id}
    GROUP BY tb.id, ts.id, ts.show_title, tpr.id, tpr.name, tpr.location, tpr.contact_name
    `;
    return booking.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch booking with ID: ${id}`);
  }
};

export const fetchPerformancesByBookingId = async (id: string) => {
  noStore();
  try {
    const performances = await sql<Performance>`
    SELECT
      tp.id,
      tp.date_time
    FROM tour_performances tp
    JOIN tour_bookings tb ON tp.booking_id=tb.id
    WHERE tb.id = ${id}
    `;
    return performances.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch performances by IDs.');
  }
};
