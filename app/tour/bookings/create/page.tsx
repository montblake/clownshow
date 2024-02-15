import Form from '@/components/bookings/create-form';
import Breadcrumbs from '@/components/breadcrumbs';
import { fetchBookingOptions } from '@/lib/data';

export default async function Page() {
  const { presenters, shows } = await fetchBookingOptions();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/tour/bookings' },
          {
            label: 'Create Booking',
            href: '/tour/bookings/create',
            active: true,
          },
        ]}
      />
      <Form presenters={presenters} shows={shows} />
    </main>
  );
}
