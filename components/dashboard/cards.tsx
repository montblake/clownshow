import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { serif } from '@/styles/fonts';

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  bookings: InboxIcon,
};

export async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export default function Card({
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
    <div className="rounded-xl bg-slate-200 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm text-gray-700 font-medium">{title}</h3>
      </div>
      <p
        className={`${serif.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl text-gray-700`}
      >
        {value}
      </p>
    </div>
  );
}
