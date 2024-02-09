// app/lib/actions.ts

'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  contact: z.string(),
});

const CreatePresenter = FormSchema.omit({ id: true });

export async function createPresenter(formData: FormData) {
  const { name, location, contact } = CreatePresenter.parse({
    name: formData.get('name'),
    location: formData.get('location'),
    contact: formData.get('contact'),
  });

  await sql`
    INSERT INTO clownshow_presenters ( name, location, contact )
    VALUES (${name}, ${location}, ${contact})
  `;

  revalidatePath('/dashboard/presenters');
  redirect('/dashboard/presenters');
}

export async function createBooking(formData: FormData) {
  // TODO
  return;
}
