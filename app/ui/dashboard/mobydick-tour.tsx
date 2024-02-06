import { serif } from '@/app/ui/fonts';

export default async function MobyDickTour({
  performances,
}: {
  performances: {
    presenter_name: string,
    presenter_location: string,
    performances: Date[],
  }[];
}) {
  // const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course



  if (!performances || performances.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4 bg-slate-50 rounded-lg flex flex-col justify-start items-center p-8">
      <h2 className={`${serif.className} $mb-4 text-xl md:text-2xl`}>
        Moby Dick Tour
      </h2>
      <ul>
        {
          performances.map(p => (
            <li key={p.presenter_name} className="mb-4 bg-white p-4 flex flex-col justify-start items-center">
              <div className="mb-4 flex flex-col items-center">

              <p className="font-bold text-2xl">{p.presenter_name}</p>
              <p className="italic">{p.presenter_location}</p>
              </div>
              <ul className="flex flex-col items-center">
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
