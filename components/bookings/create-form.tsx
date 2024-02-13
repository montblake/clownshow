import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createBooking } from '@/lib/actions';
import { Show, Presenter } from '@/lib/definitions';
import { UserGroupIcon, BookOpenIcon, UserCircleIcon, EnvelopeIcon, PhoneIcon, BanknotesIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import CreatePerformances from './create-performances';

export default function Form({
  presenters,
  shows
}: {
  presenters: Presenter[];
  shows: Show[];
}) {
  return (
    <form action={createBooking}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Presenter */}
        <div className="mb-4">
          <label htmlFor="presenter" className="mb-2 block text-sm font-medium">
            Choose presenter
          </label>
          <div className="relative">
            <select
              id="presenter"
              name="presenterId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a presenter
              </option>
              {presenters.map((presenter) => (
                <option key={presenter.id} value={presenter.id}>
                  {presenter.name}
                </option>
              ))}
            </select>
            <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Show */}
        <div className="mb-4">
          <label htmlFor="show" className="mb-2 block text-sm font-medium">
            Choose show
          </label>
          <div className="relative">
            <select
              id="show"
              name="showId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a show
              </option>
              {shows.map((show) => (
                <option key={show.id} value={show.id}>
                  {show.show_title}
                </option>
              ))}
            </select>
            <BookOpenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Booking Fee */}
        <div className="mb-4">
          <label htmlFor="fee" className="mb-2 block text-sm font-medium">
            Set the fee
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="fee"
              name="fee"
              type="number"
              placeholder="Enter dollars (integer)"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <BanknotesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Payment Status */}
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">
            Set the payment status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  defaultChecked
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      
        {/* Performance Dates */}
        <CreatePerformances />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/tour/bookings"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
