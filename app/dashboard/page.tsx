import Card from '@/app/ui/dashboard/cards';
import MobyDickPerformances from '@/app/ui/dashboard/mobydick-tour';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import { sansSerif } from '@/app/ui/fonts';
import { fetchCardData, fetchAggBookings, fetchUnbookedPresenters } from '@/app/lib/data';
import UnbookedPresenters from '../ui/dashboard/unbooked-presenters';
 
export default async function Page() {
 
  // const totalEarned = bookings.reduce((acc, booking) => Number(booking.fee) + acc, 0);
  // const totalReceived = bookings.filter(b => b.payment_status === 'paid').reduce((acc, booking) => Number(booking.fee) + acc, 0);
  // const totalPending = bookings.filter(b => b.payment_status === 'pending').reduce((acc, booking) => Number(booking.fee) + acc, 0);
  const {
    numberOfBookings,
    bookingsIncomeReceived,
    bookingsIncomePending,
  } = await fetchCardData();

  // const mobyPerformances = await fetchMobyPerformances();
  const mobyBookings = await fetchAggBookings();
  const unbookedPresenters = await fetchUnbookedPresenters();

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <Card title="Collected" value={bookingsIncomeReceived} type="collected" />
        <Card title="Pending" value={bookingsIncomePending} type="pending" />
        {/* <Card title="Total Bookings" value={bookingsIncomeTotal} type="invoices" /> */}
        <Card
          title="Number of Bookings"
          value={numberOfBookings}
          type="bookings"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 overflow-hidden">
        <MobyDickPerformances performances={mobyBookings}  />
        <UnbookedPresenters presenters={unbookedPresenters} />

      </div>
    </main>
  );
}