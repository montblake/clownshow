import { serif } from '@/styles/fonts';

export default async function MobyDickTour({
  performances,
}: {
  performances: {
    presenter_name: string,
    presenter_location: string,
    performances: Date[],
  }[];
}) {

  if (!performances || performances.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4 bg-slate-200 rounded-lg flex flex-col justify-start items-center px-8 py-4 shadow-sm">
      <h2 className={`${serif.className} mb-4 text-xl lg:text-2xl`}>
        Moby Dick Tour
      </h2>
      <ul className="w-full">
        {
          performances.map(p => (
            <li key={p.presenter_name} className="mb-4 bg-white px-4 py-2 flex flex-col justify-start items-center border rounded-lg w-full">
              <div className="mb-2 flex flex-col items-center w-full">

              <p className="font-bold text-2xl">{p.presenter_name}</p>
              <p className="italic">{p.presenter_location}</p>
              </div>
              <ul className="flex flex-col items-center mb-4 w-full">
                {p.performances.map(perf => (
                  <li key={perf.toLocaleString()} className={`${serif.className} text-xl`}>
                    {perf.toLocaleString()}
                  </li>
                ))}
              </ul>
            </li>
          ))
        }
        
  
       
      </ul>
    </div>
  );
}
