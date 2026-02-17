import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import ProductionInfo from "@/components/production_info";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

async function getDickensImages() {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "productions",
    "dickens",
    "2025",
  );

  const files = await fs.readdir(imagesDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/productions/dickens/2025/${file}`,
      alt: `Charles Dickens Begrudgingly Performs 'A Christmas Carol' Again still ${index + 1}`,
    }));
}

const Title = "Charles Dickens Begrudgingly Performs 'A Christmas Carol' Again";
const Credits = [
  "Created and Performed by Blake Montgomery",
  "Directed by Jonathan Berry",
];
const SecondCredits = [
  "Costume Design by Izumi Inaba",
  "Lighting Design by Lee Fiskness",
  "Sound Design by Dee Etti-Williams",
  "Wig Design by Megan E. Pirtle",
  "Scenic Design by Pamela Maurer",
];
const Commendations = [
  {
    title: "Jeff Award for Solo Performance (Blake Montgomery)",
    author: "",
    publication: "",
  },
  {
    title: "Jeff Award-Nominated for New Adaptation (Blake Montgomery)",
    author: "",
    publication: "",
  },
];
const Prev = {
  title: "Dawn, Quixote",
  link: "/blake-montgomery/productions/quixote",
};
const Next = {
  title: "Hamlet",
  link: "/blake-montgomery/productions/hamlet",
};

export default async function Dickens() {
  const images = await getDickensImages();

  return (
    <main className="flex flex-row items-start justify-center w-full h-[calc(100vh-6rem)] bg-gradient-to-b from-neutral-800 to-neutral-950 px-12 py-0 overflow-hidden text-neutral-400">
      <div className="flex flex-row items-start justify-center w-full px-6 py-0 h-full">
        <ProductionInfo
          title={Title}
          credits={Credits}
          secondCredits={SecondCredits}
          commendations={Commendations}
          prev={Prev}
          next={Next}
        />
        <div className="w-1/2 h-full overflow-y-scroll flex flex-col items-center justify-start gap-4 bg-gradient-to-b  from-neutral-300/10 to-neutral-600/10 px-8 pt-8 pb-16">
          {images.length === 0 ? (
            <p className="mt-8 text-sm text-neutral-400">
              No images found in /public/productions/dickens/2025.
            </p>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="mt-0 text-sm text-neutral-400">
                Photos by Joe Mazza / Brave Lux Inc.
              </p>
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
