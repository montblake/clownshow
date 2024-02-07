import { serif } from '@/styles/fonts';

export default async function UnbookedPresenters({
  presenters,
}: {
  presenters: {
    id: string,
    name: string,
    location: string,
    contact: string,
  }[];
}) {

  if (!presenters || presenters.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4 bg-slate-200 rounded-lg flex flex-col justify-start items-center px-8 py-4 shadow-sm">
      <h2 className={`${serif.className} mb-4 text-xl lg:text-2xl`}>
        Unbooked Presenters
      </h2>
      
      <ul className="">
        {
          presenters.map(p => (
            <li key={p.id} className="mb-4 bg-white px-4 py-2 flex flex-col justify-start items-center border rounded-lg">
              <div className="mb-1 flex flex-col items-center">

              <h3 className="font-bold text-xl truncate">{p.name}</h3>
              <p className="italic">{p.location}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
