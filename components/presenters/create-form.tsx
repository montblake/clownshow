import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createPresenter } from '@/lib/actions';

export default function Form() {
  return (
    <form action={createPresenter}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Presenter Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Presenter Name
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Presenter Location */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Presenter Location
          </label>
          <div className="relative mt-2 rounded-md">
          <input
              id="location"
              name="location"
              type="text"
              placeholder="Enter location"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Presenter Contact */}
        <div className="mb-4">
          <label htmlFor="contact" className="mb-2 block text-sm font-medium">
            Presenter Contact
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Enter contact"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div> 
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/presenters"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
