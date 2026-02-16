import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

async function getMoby2011Images() {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "productions",
    "moby",
    "2011",
  );

  const files = await fs.readdir(imagesDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/productions/moby/2011/${file}`,
      alt: `Moby-Dick (2011) still ${index + 1}`,
    }));
}

export default async function Moby2011() {
  const images = await getMoby2011Images();

  return (
    <main className="flex flex-row items-start justify-center w-full h-[calc(100vh-6rem)] bg-gradient-to-b from-neutral-800 to-neutral-950 px-12 py-0 overflow-hidden text-neutral-300">
      <div className="flex flex-row items-start justify-center w-full px-6 py-0 h-full">
        <div className="flex flex-col items-start justify-start gap-0 w-1/2 p-8">
          <Link href="/blake-montgomery/productions">
            <p className="text-sm text-neutral-400 mb-8">
              &larr; Back to Production History
            </p>
          </Link>
          <h1 className="text-3xl font-semibold">Moby-Dick (2011)</h1>
          <p>Adapted from the novel by Herman Melville</p>
          <p className="">Conceived and Directed by Blake Montgomery</p>
          <p className="">
            Created and performed by Chelsea Keenan, Rachel Griesinger, Sarah
            Hecht, Ian Knox, Jonathan Stutzman, and Nathan Wonder
          </p>
          <p className="">Original Music by Kevin O&apos;Donnell</p>
          <p className="">Scenic Design by Blake Montgomery</p>
          <p className="">Costume Design by Izumi Inaba</p>
          <p className="">Lighting Design by Danny ???</p>
          <p className="mt-2 font-bold uppercase">Awards</p>
          <p className="">
            Jeff Award for New Adaptation (Blake Montgomery).
            <br />
            Jeff Award for Original Incidental Music (Kevin O&apos;Donnell).
            <br />
            Jeff Award for Artistic Specialization (Casy Baker, Kevin
            O&apos;Donnell, Mike Przygoda - Percussion)
          </p>
          <p className="">
            Jeff Award-Nominated for Ensemble. <br />
            Jeff Award-Nominated for Director - Play (Blake Montgomery).
          </p>
          <Link href="/blake-montgomery/productions/hansel">
            <p className="text-sm text-neutral-400 mb-8">
              &larr; Hansel und Gretel
            </p>
          </Link>
          <Link href="/blake-montgomery/productions/quixote">
            <p className="text-sm text-neutral-400 mb-8">
              Dawn, Quixote &rarr;
            </p>
          </Link>
        </div>
        <div className="w-1/2 h-full overflow-y-scroll flex flex-col items-center justify-start gap-4 bg-gradient-to-b  from-neutral-300/10 to-neutral-600/10 px-8 pt-8 pb-16">
          {images.length === 0 ? (
            <p className="mt-8 text-sm text-neutral-400">
              No images found in /public/productions/moby/2006.
            </p>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              {images.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-auto max-h-[70vh] object-cover object-top border border-neutral-600"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
