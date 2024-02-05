"use server"

import { sql } from '@vercel/postgres';
import { Performance, Booking, Presenter, User } from './definitions';

export const fetchPresenters = async () => {
  try {
    const presenters = await sql<Presenter>`
    SELECT * FROM clownshow_presenters
    `;
    return presenters.rows;
  } catch (error) {
    console.error(error);
  }
}