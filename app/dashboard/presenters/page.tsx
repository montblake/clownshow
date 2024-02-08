import { PlusIcon } from '@heroicons/react/24/outline';
import { fetchPresenters } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Page() {
  const presenters = await fetchPresenters();

  return (
    <main className="w-full">
      <header className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-xl md:text-2xl">Presenters</h2>
        <Button variant="outline" size="icon">
          <PlusIcon className="w-6" />
        </Button>
      </header>
      <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {presenters?.map((p) => (
          <li key={p.id} className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow">
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <p>{p.location}</p>
            <p>Contact: {p.contact}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
