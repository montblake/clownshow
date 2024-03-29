import { fetchFilteredBookings } from '@/lib/data';
import { UpdateBooking } from '@/components/bookings/buttons';
import Performances from '@/components/bookings/performances';
import ConfirmDeleteModal from '@/components/confirm-delete-modal';

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
          key={b.id}
          className="flex flex-col items-start justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow"
        >
          <div className="mb-2 flex">
            <ConfirmDeleteModal resourceId={b.id} resourceType="booking" />
            <UpdateBooking id={b.id} />
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
            <Performances performances={b.performances} />
          </div>
        </li>
      ))}
    </ul>
  );
}
