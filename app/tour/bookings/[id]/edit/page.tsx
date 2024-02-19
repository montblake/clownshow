import Form from '@/components/bookings/edit-form';
import Breadcrumbs from '@/components/breadcrumbs';
import { fetchBookingById } from '@/lib/data';
import { fetchBookingOptions } from '@/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // const booking = await fetchBookingById(id);
  // const { presenters, shows } = await fetchBookingOptions();
  const booking = await fetchBookingById(id);
  const { presenters, shows } = await fetchBookingOptions();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/tour/bookings' },
          {
            label: 'Edit Booking',
            href: `/tour/bookings/${id}/edit`,
            active: true,
          },
        ]}
      />
      {/* you may need presenters and shows here? */}
      <Form booking={booking} shows={shows} presenters={presenters} />
    </main>
  );
}
