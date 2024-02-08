// lib/data.ts

'use server';

import { sql } from '@vercel/postgres';
import {
  Performance,
  Booking,
  Presenter,
  User,
  TourField,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchPresenters = async () => {
  noStore();
  try {
    const presenters = await sql<Presenter>`
    SELECT * FROM clownshow_presenters
    `;
    return presenters.rows;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBookings = async () => {
  noStore();
  try {
    const data = await sql<Booking>`SELECT * FROM clownshow_bookings`;
    console.log('Bookings', data.rows);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed ot fetch bookings data.');
  }
};

export const fetchCardData = async () => {
  noStore();
  try {
    const bookingsCountPromise = sql`SELECT COUNT(*) FROM clownshow_bookings`;
    const bookingsIncomePromise = sql`SELECT
      SUM(CASE WHEN payment_status = 'paid' THEN fee
      ELSE 0 END) AS "paid",
      SUM(CASE WHEN payment_status = 'pending' THEN fee
      ELSE 0 END) AS "pending"
      FROM clownshow_bookings`;

    const data = await Promise.all([
      bookingsCountPromise,
      bookingsIncomePromise,
    ]);

    const numberOfBookings = Number(data[0].rows[0].count ?? '0');
    const bookingsIncomeReceived = Number(data[1].rows[0].paid ?? '0');
    const bookingsIncomePending = Number(data[1].rows[0].pending ?? '0');
    const bookingsIncomeTotal = bookingsIncomeReceived + bookingsIncomePending;

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
      numberOfBookings,
      bookingsIncomeReceived,
      bookingsIncomePending,
      bookingsIncomeTotal,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
};

export const fetchAggBookings = async () => {
  noStore();
  try {
    const data = await sql<TourField>`
      SELECT
        cpr.name AS presenter_name,
        cpr.location AS presenter_location,
        array_agg(cp.date_time ORDER BY cp.date_time) AS performances
      FROM clownshow_bookings cb
      JOIN clownshow_performances cp ON cp.booking_id = cb.id
      JOIN clownshow_shows cs ON cp.show_id = cs.id
      JOIN clownshow_presenters cpr ON cb.presenter_id = cpr.id
      WHERE cs.show_title = 'Moby Dick'
      GROUP BY cpr.name, cpr.location
      ORDER BY performances   
    `;
    const mobyBookings = data.rows;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return mobyBookings;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Moby Dick bookings data.');
  }
};

export const fetchUnbookedPresenters = async () => {
  noStore();
  try {
    const data = await sql<Presenter>`
      SELECT
        cpr.id,
        cpr.name,
        cpr.location
      FROM clownshow_presenters cpr
      WHERE NOT EXISTS (
        SELECT 1
        FROM clownshow_bookings cb
        JOIN clownshow_performances cp ON cb.id = cp.booking_id
        JOIN clownshow_shows cs ON cp.show_id = cs.id
        WHERE cs.show_title = 'Moby Dick'
        AND cpr.id = cb.presenter_id
      )
      ORDER BY cpr.name
    `;
    const presenters: Presenter[] = data.rows;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return presenters;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch unbooked presenters.');
  }
};
