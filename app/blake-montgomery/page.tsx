import Image from "next/image";
import Link from "next/link";

export default function BlakeMontgomery() {
  return (
    <main className="flex flex-col items-start justify-center w-full h-[calc(100vh-6rem)] bg-gradient-to-b from-neutral-900 to-neutral-800 px-12 py-8">
      <div className="flex flex-col md:flex-row items-start justify-center w-full h-full px-8 py-4 gap-8">
        <Image
          src="/bg_mazza.jpg"
          alt="Blake Montgomery"
          width={800}
          height={800}
          className="w-1/3 h-full object-cover border border-neutral-600"
        />
        <div className="flex flex-col items-start justify-between w-2/3 text-base/5 xl:text-xl text-neutral-300 h-full flex-1 overflow-y-auto">
          <div className="flex flex-col items-start justify-start w-full gap-4 text-base/5 xl:text-xl text-neutral-300 h-full">
            <p className="w-full text-justify">
              <span className="font-bold uppercase">Blake Montgomery</span> is a
              Chicago-based theater artist whose career spans acting and
              directing, written works and devised theater, contemporary
              naturalism and physical theater styles. He began his career in
              Chicago directing ensemble clown theater and performing with a
              variety of non-naturalistic Chicago theaters, most notably Redmoon
              with whom he collaborated for more than a decade.
            </p>
            <p className="w-full text-justify">
              In 2005, Montgomery founded The Building Stage, a theater company
              and performance space, where he served as Artistic Director until
              its closing in 2013. The company was known for its
              ensemble-devised, director-driven creations, particularly in
              literary adaptations like their Jeff Award-winning{" "}
              <span className="font-bold">Moby-Dick</span> and the poetic,
              clown-inspired <span className="font-bold">Dawn, Quixote</span>.
            </p>
            <p className="w-full text-justify">
              For the past two years, Montgomery has been performing his solo
              show{" "}
              <span className="font-bold">
                Charles Dickens Begrudgingly Performs &lsquo;A Christmas
                Carol&rsquo; Again
              </span>{" "}
              produced by his new creative production company, Clownshow. The
              show which premiered at The Building Stage in 2011 and won the
              Jeff Award for Best Solo Show with a revised production in 2012,
              was presented at The Den Theater in 2024 and Theater Wit in 2025.
            </p>
            <p className="w-full text-justify">
              Montgomery&apos;s artistic approach draws on his training at the
              École Jacques Lecoq, the Dell&apos;Arte School of Physical
              Theater, and Middlebury College. A member of Actors&apos; Equity,
              his performances in Chicago include work with The House Theatre,
              The Hypocrites, Remy Bumppo Theatre Company, Court Theatre,
              Chicago Shakespeare, Steppenwolf, and Writers Theatre.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <Link href="/blake-montgomery/productions">
              <p className="text-sm text-neutral-400">
                &rarr; View Production History
              </p>
            </Link>
            <Link href="/blake-montgomery/contact">
              <p className="text-sm text-neutral-400">&rarr; Get in Touch</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
