// components/dashboard/cards.tsx

import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { serif } from '@/styles/fonts';
import { fetchCardData } from '@/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  bookings: InboxIcon,
};

export default async function CardsWrapper() {
  const { numberOfBookings, bookingsIncomeReceived, bookingsIncomePending } =
    await fetchCardData();

  return (
    <div className="grid w-full gap-6 sm:grid-cols-1 lg:grid-cols-3">
      <Card title="Collected" value={bookingsIncomeReceived} type="collected" />
      <Card title="Pending" value={bookingsIncomePending} type="pending" />
      <Card
        title="Number of Bookings"
        value={numberOfBookings}
        type="bookings"
      />
    </div>
  );
}

function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'bookings' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-muted p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-foreground" /> : null}
        <h3 className="ml-2 text-sm font-medium text-foreground">{title}</h3>
      </div>
      <p
        className={`${serif.className}
          truncate rounded-xl bg-background px-4 py-8 text-center text-2xl text-foreground`}
      >
        {value}
      </p>
    </div>
  );
}
