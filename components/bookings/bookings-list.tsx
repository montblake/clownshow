import { formatDateTime} from '@/lib/utils';
import { fetchFilteredBookings } from '@/lib/data';

export default async function BookingsList({
  query,
  currentPage,
}: {
    query: string;
    currentPage: number;
}) {
  const bookings = await fetchFilteredBookings(query, currentPage);

  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {bookings?.map((b) => (
        <li
          key={b.presenter_name}
          className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow"
        >
          <h3 className="text-2xl font-bold">{b.id}</h3>
          <p>Presenter:{b.presenter_name}</p>
          <p>Location: {b.presenter_location}</p>
          <p>Contact: {b.presenter_contact}</p>
          <p>Show: {b.show_title}</p>
          <p>Fee: {b.fee}</p>
          <p>Status: {b.payment_status}</p>
          <ul className="mb-4 flex w-full flex-col items-center">
              {b.performances.map((perf: Date) => (
                <li
                  key={perf.toLocaleString()}
                >
                  {formatDateTime(perf.toLocaleString())}
                </li>
              ))}
            </ul>
        </li>
      ))}
    </ul>
  );
}
