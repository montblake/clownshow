import Image from "next/image";
import Link from "next/link";
import Productions from "../data/productions";

export default function ProductionHistory() {
  return (
    <main className="flex flex-row items-start justify-center w-full h-[calc(100vh-6rem)] bg-gradient-to-b from-neutral-800 to-neutral-950 px-12 py-0 overflow-hidden">
      <div className="flex flex-col items-start justify-start w-1/2 py-8">
        <h1 className="text-lg text-neutral-400 w-full uppercase mb-4">
          Production History
        </h1>
      </div>
      <div className="w-1/2 h-full overflow-y-scroll flex flex-col items-center justify-start gap-4 bg-gradient-to-b  from-neutral-300/10 to-neutral-600/10 py-8">
        {Productions.map((production) => (
          <Link
            href={`/blake-montgomery/productions/${production.link}`}
            key={production.title}
          >
            <div
              className="flex flex-col items-center justify-start gap-2 rounded-xl overflow-hidden border border-neutral-600 relative w-full h-auto"
              key={production.title}
            >
              <Image
                src={production.image}
                alt={production.title}
                width={300}
                height={300}
                className="w-full max-w-[300px] aspect-square max-h-[300px] bg-neutral-800 object-cover object-top overflow-hidden rounded-xl hover:opacity-50 transition-all duration-300"
              />
              <div className="flex flex-col items-center justify-center h-full w-full gap-0 rounded-xl overflow-hidden bg-neutral-950/75 py-4 absolute opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="font-heading text-xs text-neutral-200 w-full text-center mb-1 uppercase">
                  {production.company}
                </p>
                <h3 className="font-heading text-xl font-bold uppercase text-neutral-200 w-full text-center leading-5 mb-1">
                  {production.title}
                </h3>
                <p className="font-heading text-xs text-neutral-200 w-full text-center italic">
                  {production.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
