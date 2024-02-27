import { fetchFilteredPresenters } from '@/lib/data';
import { EditPresenter } from '@/components/presenters/buttons';
import ConfirmDeleteModal from '@/components/confirm-delete-modal';

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
          className="flex flex-col items-start justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow"
        >
          <div className="mb-2 flex">
            <EditPresenter id={p.id} />
            <ConfirmDeleteModal
              resourceType="presenter"
              resourceId={p.id}
            />
          </div>
          <div className="mb-2">
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <p>{p.location}</p>
          </div>
          <div className="mb-2">
            <p>Contact: {p.contact_name}</p>
            <p>EMAIL: {p.contact_email}</p>
            <p>PHONE: {p.contact_phone}</p>
          </div>
          <p>PRESENTER ID: {p.id}</p>
          <p>Created:{p.created_at.toLocaleString()}</p>
          <p>Updated:{p.updated_at.toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}
