import { fetchShows } from '@/lib/data';
import { Show } from '@/lib/definitions';
import { UpdateShow, DeleteShow } from '@/components/shows/buttons';

export default async function ShowsList() {
  const shows: Show[] = await fetchShows();

  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {shows?.map((show) => (
        <li
          key={show.id}
          className="flex flex-col items-start justify-center rounded-lg bg-slate-50 p-4 text-xl text-slate-800 drop-shadow"
        >
          <div className="mb-2 flex">
            <UpdateShow id={show.id} />
            <DeleteShow id={show.id} />
          </div>
          <div className="mb-2">
            <p className="">SHOW ID: {show.id}</p>
            <p>Created:{show.created_at.toLocaleString()}</p>
            <p>Updated: {show.updated_at.toLocaleString()}</p>
          </div>
          <div className="mb-2">
            <p>Title: {show.show_title}</p>
            {/* <p>Description: {show.description}</p> */}
            <p>Running Time: {show.running_time_in_minutes} minutes</p>
            <p>Number of Intermissions: {show.num_intermissions}</p>
            <p>Cast Size: {show.cast_size}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
