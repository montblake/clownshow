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

async function getQuixoteImages() {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "productions",
    "quixote",
  );

  const files = await fs.readdir(imagesDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/productions/quixote/${file}`,
      alt: `Dawn, Quixote still ${index + 1}`,
    }));
}

export default async function Quixote() {
  const images = await getQuixoteImages();

  return (
    <main className="flex flex-row items-start justify-center w-full h-[calc(100vh-6rem)] bg-gradient-to-b from-neutral-800 to-neutral-950 px-12 py-0 overflow-hidden text-neutral-300">
      <div className="flex flex-row items-start justify-center w-full px-6 py-0 h-full">
        <div className="flex flex-col items-start justify-start gap-2 w-1/2 p-8">
          <Link href="/blake-montgomery/productions">
            <p className="text-sm text-neutral-400 mb-8">
              &larr; Back to Production History
            </p>
          </Link>
          <h1 className="text-3xl font-semibold">Dawn, Quixote</h1>
          <p className="">Adapted from the novel by Miguel de Cervantes</p>
          <p className="">Conceived and Directed by Blake Montgomery</p>
          <p className="">
            Created and performed by Nathan Wonder, Mike Hamilton, Gabe Franken,
            Chelsea Keenan, Kate Suffern, and Anne Walaszek.
          </p>
          <p className="">Original Music by Pamela Maurer</p>
          <Link href="/blake-montgomery/productions/moby-2011">
            <p className="text-sm text-neutral-400 mb-8">
              &larr; Moby-Dick (2011)
            </p>
          </Link>
          <Link href="/blake-montgomery/productions/dickens">
            <p className="text-sm text-neutral-400 mb-8">
              Charles Dickens Begrudgingly &rarr;
            </p>
          </Link>
        </div>
        <div className="w-1/2 h-full overflow-y-scroll flex flex-col items-center justify-start gap-4 bg-gradient-to-b  from-neutral-300/10 to-neutral-600/10 px-8 pt-8 pb-16">
          {images.length === 0 ? (
            <p className="mt-8 text-sm text-neutral-400">
              No images found in /public/productions/noir.
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
