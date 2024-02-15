// lib/data.ts

'use server';

import { sql } from '@vercel/postgres';
import { Presenter, BookingFields, Show } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

const PRESENTERS_PER_PAGE = 12;
export const fetchPresentersPages = async (query: string) => {
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

  try {
    const presenters = await sql<Presenter>`
      SELECT *
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

export const fetchShows = async () => {
  noStore();
  try {
    const shows = await sql<Show>`
      SELECT *
      FROM tour_shows
    `;

    return shows.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch shows.');
  }
};

const BOOKINGS_PER_PAGE = 6;
export const fetchFilteredBookings = async (
  query: string,
  currentPage: number,
) => {
  noStore();
  const offset = (currentPage - 1) * BOOKINGS_PER_PAGE;

  try {
    const data = await sql<BookingFields>`
      SELECT
        tb.id,
        tb.created_at,
        tb.updated_at,
        tb.fee,
        tb.payment_status,
        tb.performances,
        tb.created_at,
        tb.updated_at,
        ts.show_title AS show_title,
        tpr.name AS presenter_name,
        tpr.location AS presenter_location,
        tpr.contact_name AS presenter_contact,
        array_agg(tp.date_time) AS performances
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
      GROUP BY tb.id, ts.show_title, tpr.name, tpr.location, tpr.contact_name
      ORDER BY tb.id
    `;
    const filteredBookings = data.rows;
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
      SELECT COUNT(*) AS total_bookings
      FROM tour_bookings tb
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

export const fetchAssociatedPerformances = async (bookingId: string) => {
  noStore();
  try {
    const performances = await sql`
      SELECT * 
      FROM tour_performances
      WHERE booking_id=${bookingId}
    `;
    return performances.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Booking Performances.');
  }
};
