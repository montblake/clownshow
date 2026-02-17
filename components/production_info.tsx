import Link from "next/link";

interface ProductionInfoProps {
  title: string;
  credits: string[];
  secondCredits: string[];
  commendations: {
    title: string;
    author: string;
    publication: string;
  }[];
  prev: {
    title: string;
    link: string;
  };
  next: {
    title: string;
    link: string;
  };
}

export default function ProductionInfo({
  title,
  credits,
  secondCredits,
  commendations,
  prev,
  next,
}: ProductionInfoProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-2 w-1/2 h-full p-8">
      <div className="flex flex-col items-start justify-start gap-4 h-full overflow-y-scroll pb-8">
        <Link href="/blake-montgomery/productions">
          <p className="text-sm text-neutral-400 mb-8 border px-4 py-2 rounded-md border-neutral-400">
            &larr; Back to Production History
          </p>
        </Link>
        <div className="flex flex-col items-start justify-start gap-0">
          <h1 className="text-3xl font-semibold mb-2">{title}</h1>
          {credits.map((credit) => (
            <p key={credit}>{credit}</p>
          ))}
        </div>
        {secondCredits.length > 0 && (
          <div className="flex flex-col items-start justify-start gap-0">
            {secondCredits.map((credit) => (
              <p key={credit}>{credit}</p>
            ))}
          </div>
        )}
        {commendations.length > 0 && (
          <div className="flex flex-col items-start justify-start gap-4">
            {commendations.map((commendation) => (
              <div
                key={commendation.title}
                className="flex flex-col items-start justify-start gap-0"
              >
                <h2 className="text-lg font-semibold">{commendation.title}</h2>
                {commendation.author && (
                  <p className="">
                    {commendation.author},{" "}
                    <span className="italic">{commendation.publication}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-row items-start justify-start gap-4">
        <Link href={prev.link}>
          <p className="text-sm text-neutral-400 mb-8 border px-4 py-2 rounded-md border-neutral-400">
            &larr; {prev.title}
          </p>
        </Link>
        <Link href={next.link}>
          <p className="text-sm text-neutral-400 mb-8 border px-4 py-2 rounded-md border-neutral-400">
            {next.title} &rarr;
          </p>
        </Link>
      </div>
    </div>
  );
}
