// components/dashboard/mobydick-tour.tsx

import { serif } from '@/styles/fonts';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { formatDateTime } from '@/lib/utils';
import { fetchAggBookings } from '@/lib/data';

export default async function MobyDickTour() {
  const performances = await fetchAggBookings();

  if (!performances || performances.length === 0) {
    return <p className="mt-4 text-muted-foreground">No data available.</p>;
  }

  return (
    <div className="w-full rounded-xl bg-muted bg-muted p-2 shadow-sm md:col-span-4">
      <div className="flex p-4">
        <CalendarDaysIcon className="h-5 w-5 text-foreground" />
        <h2 className="ml-2 text-sm font-medium text-foreground">
          Moby Dick Tour
        </h2>
      </div>

      <ul>
        {performances.map((p) => (
          <li
            key={p.presenter_name}
            className="mb-4 flex w-full flex-col items-center justify-start rounded-lg border bg-background p-4"
          >
            <div className="mb-2 flex w-full flex-col items-center">
              <h3 className="truncate text-xl font-bold">{p.presenter_name}</h3>
              <p className="italic">{p.presenter_location}</p>
            </div>
            <ul className="mb-4 flex w-full flex-col items-center">
              {p.performances.map((perf) => (
                <li
                  key={perf.toLocaleString()}
                  className={`${serif.className} text-md`}
                >
                  {formatDateTime(perf.toLocaleString())}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
