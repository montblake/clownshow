
import { fetchPresenters } from '@/app/lib/data';
import Link from 'next/link';

export default async function Page() {
  const presenters = await fetchPresenters();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h2 className="text-3xl mb-4">Presenters</h2>
      <ul className="flex flex-col gap-2 justify-center items-center">
        {presenters?.map(p => (
          <Link key={p.id} href={`/management/presenters/${p.id}`} className="w-full">
          <li className="bg-slate-50 p-4 rounded-lg text-xl text-slate-800 flex flex-col justify-center items-center">
            <h3 className="font-bold text-2xl">          
              {p.name}
            </h3>
            <p>
              {p.location}
            </p>
          </li>
          </Link>
        ))}
      </ul>

    </main>
  );
}
