import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createShow } from '@/lib/actions';

// show_title: string;
// running_time_in_minutes: number;
// num_intermissions: number;
// cast_size: number;

export default function Form() {
  return (
    <form action={createShow}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Show Title */}
        <div className="mb-4">
          <label htmlFor="show_title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="show_title"
              name="show_title"
              type="text"
              placeholder="Enter show title"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Show Running Time */}
        <div className="mb-4">
          <label htmlFor="running_time_in_minutes" className="mb-2 block text-sm font-medium">
            Running Time
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="running_time_in_minutes"
              name="running_time_in_minutes"
              type="number"
              placeholder="Enter running time in minutes"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Number of Intermissions */}
        <div className="mb-4">
          <label htmlFor="num_intermissions" className="mb-2 block text-sm font-medium">
            Number of Intermissions
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="num_intermissions"
              name="num_intermissions"
              type="number"
              placeholder="Enter an integer"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Cast Size */}
        <div className="mb-4">
          <label htmlFor="cast_size" className="mb-2 block text-sm font-medium">
            Cast Size
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="cast_size"
              name="cast_size"
              type="number"
              placeholder="Enter an integer"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/tour/shows"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
