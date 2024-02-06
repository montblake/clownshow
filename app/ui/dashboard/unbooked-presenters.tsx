import { serif } from '@/app/ui/fonts';

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
    <div className="w-full md:col-span-4 bg-slate-50 rounded-lg flex flex-col justify-start items-center p-8">
      <h2 className={`${serif.className} mb-4 text-xl md:text-2xl`}>
        Unbooked Presenters
      </h2>
      
      <ul className="scroll">
        {
          presenters.map(p => (
            <li key={p.id} className="mb-4 bg-white px-4 py-2 flex flex-col justify-start items-center">
              <div className="mb-4 flex flex-col items-center">

              <p className="font-bold text-2xl">{p.name}</p>
              <p className="italic">{p.location}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
