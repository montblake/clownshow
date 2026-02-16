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

async function getHamletImages() {
  const imagesDir = path.join(process.cwd(), "public", "productions", "hamlet");

  const files = await fs.readdir(imagesDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/productions/hamlet/${file}`,
      alt: `Hamlet still ${index + 1}`,
    }));
}

export default async function Hamlet() {
  const images = await getHamletImages();

  return (
    <main className="flex flex-row items-start justify-center w-full h-[calc(100vh-6rem)] bg-gradient-to-b from-neutral-800 to-neutral-950 px-12 py-0 overflow-hidden text-neutral-400">
      <div className="flex flex-row items-start justify-center w-full px-6 py-0 h-full">
        <div className="flex flex-col items-start justify-start gap-2 w-1/2 p-8">
          <Link href="/blake-montgomery/productions">
            <p className="text-sm text-neutral-400 mb-8">
              &larr; Back to Production History
            </p>
          </Link>
          <h1 className="text-3xl font-semibold">Hamlet</h1>
          <p>by William Shakespeare</p>
          <p className="">Directed by Blake Montgomery</p>
          <p className="">Photos by Sean Williams</p>

          <Link href="/blake-montgomery/productions/dustbowl">
            <p className="text-sm text-neutral-400 mb-8">
              Dustbowl Gothic &rarr;
            </p>
          </Link>
        </div>
        <div className="w-1/2 h-full overflow-y-scroll flex flex-col items-center justify-start gap-4 bg-gradient-to-b  from-neutral-300/10 to-neutral-600/10 px-8 pt-8 pb-16">
          {images.length === 0 ? (
            <p className="mt-8 text-sm text-neutral-400">
              No images found in /public/productions/hamlet.
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
