import { Suspense } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import { BookingSkeleton } from '@/components/skeletons';
import Booking from '@/components/bookings/booking';
import { redirect } from 'next/navigation';
import { deleteBooking } from '@/lib/actions';

export default async function ShowBookingPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const handleDelete = async () => {
    await deleteBooking(id);
    redirect('/tour/bookings');
  };

  return (
    <main className="w-full ">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/tour/bookings' },
          {
            label: 'Show Booking',
            href: `/tour/bookings/${id}`,
            active: true,
          },
        ]}
      />
      <div className="my-2 md:my-4">
        <Suspense fallback={<BookingSkeleton />}>
          <Booking bookingId={id} handleDelete={handleDelete} editable={true} />
        </Suspense>
      </div>
    </main>
  );
}
