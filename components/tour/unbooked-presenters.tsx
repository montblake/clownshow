import { serif } from '@/styles/fonts';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { fetchUnbookedPresenters } from '@/lib/data';

export default async function UnbookedPresenters() {
  const presenters = await fetchUnbookedPresenters();

  if (!presenters || presenters.length === 0) {
    return <p className="mt-4 text-muted-foreground">No data available.</p>;
  }

  return (
    <div className="w-full rounded-xl bg-muted p-2 shadow-sm md:col-span-4">
      <div className="flex p-4">
        <UserGroupIcon className="h-5 w-5 text-foreground" />
        <h2 className="ml-2 text-sm font-medium text-foreground">
          Unbooked Presenters
        </h2>
      </div>

      <ul>
        {presenters.map((p) => (
          <li
            key={p.id}
            className="mb-2 flex w-full flex-col items-center justify-start rounded-lg border bg-background px-4 py-2"
          >
            <h3 className="truncate text-xl font-bold">{p.name}</h3>
            <p className="italic">{p.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
