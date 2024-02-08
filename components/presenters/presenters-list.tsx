import { fetchFilteredPresenters } from '@/lib/data';

export default async function PresentersList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const presenters = await fetchFilteredPresenters(query, currentPage);
  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {presenters?.map((p) => (
        <li
          key={p.id}
          className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow"
        >
          <h3 className="text-2xl font-bold">{p.name}</h3>
          <p>{p.location}</p>
          <p>Contact: {p.contact}</p>
        </li>
      ))}
    </ul>
  );
}
