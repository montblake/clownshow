import { formatDateTime } from '@/lib/utils';
import { fetchFilteredBookings } from '@/lib/data';
import { fetchAssociatedPerformances } from '@/lib/data';
import { BookingFields } from '@/lib/definitions';
import { DeleteBooking, EditBooking } from '@/components/bookings/buttons';

export default async function BookingsList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const bookings = await fetchFilteredBookings(query, currentPage);
  console.log('BOOKINGS', bookings);

  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {bookings?.map((b) => (
        <li
          key={b.presenter_name}
          className="flex flex-col items-start justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow"
        >
          <div className="mb-2 flex">
            <DeleteBooking id={b.id} />
            <EditBooking id={b.id} />
          </div>
          <div className="mb-2">
            <p className="">BOOKING ID: {b.id}</p>
            <p>Created:{b.created_at.toLocaleString()}</p>
            <p>Updated: {b.updated_at.toLocaleString()}</p>
          </div>
          <div className="mb-2">
            <p>Presenter:{b.presenter_name}</p>
            <p>Location: {b.presenter_location}</p>
            <p>Contact: {b.presenter_contact}</p>
          </div>
          <div className="mb-2">
            <p>Show: {b.show_title}</p>
            <p>Fee: {b.fee}</p>
            <p>Status: {b.payment_status}</p>
          </div>
          <div>
            <p>Performances:</p>
            <ul className="mb-4 flex w-full flex-col items-start">
              {b.performances?.map((perf: Date, i) => (
                <li key={i}>{perf?.toString() || 'NONE'}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
