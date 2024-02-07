import { fetchCardData, fetchAggBookings, fetchUnbookedPresenters } from '@/lib/data';
import Card from '@/components/dashboard/cards';
import MobyDickPerformances from '@/components/dashboard/mobydick-tour';
import UnbookedPresenters from '@/components/dashboard/unbooked-presenters';
 
export default async function Page() {
  const {
    numberOfBookings,
    bookingsIncomeReceived,
    bookingsIncomePending,
  } = await fetchCardData();
  const mobyBookings = await fetchAggBookings();
  const unbookedPresenters = await fetchUnbookedPresenters();

  return (
    <main className="w-full">
      <h1 className="mb-4 text-xl md:text-2xl">
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 w-full">
        <Card title="Collected" value={bookingsIncomeReceived} type="collected" />
        <Card title="Pending" value={bookingsIncomePending} type="pending" />
        <Card
          title="Number of Bookings"
          value={numberOfBookings}
          type="bookings"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 w-full">
        <MobyDickPerformances performances={mobyBookings}  />
        <UnbookedPresenters presenters={unbookedPresenters} />

      </div>
    </main>
  );
}