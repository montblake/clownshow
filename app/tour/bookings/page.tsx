// app/dashboard/bookings/page.tsx

import BookingsList from '@/components/bookings/bookings-list';
import SearchBookings from '@/components/bookings/search';
import { CreateBooking } from '@/components/bookings/buttons';
import { Suspense } from 'react';
import { BookingsListSkeleton } from '@/components/skeletons';
import { fetchBookingsPages } from '@/lib/data';
import Pagination from '@/components/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchBookingsPages(query);

  return (
    <main className="w-full">
      <header className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-xl md:text-2xl">Bookings</h2>
      </header>
      <div className="my-4 flex items-center justify-between gap-2 md:my-8">
        <SearchBookings placeholder="Filter by presenter name, location, contact, show title, or payment status..." />
        <CreateBooking />
      </div>
      <Suspense key={query + currentPage} fallback={BookingsListSkeleton}>
        <BookingsList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
