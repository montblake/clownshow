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

const Title = "Dawn, Quixote";
const Credits = [
  "Playfully adapted from the novel by Miguel de Cervantes",
  "Conceived and Directed by Blake Montgomery",
  "Created and performed by Nathan Wonder, Mike Hamilton, Gabe Franken, Chelsea Keenan, Kate Suffern, and Anne Walaszek",
];
const SecondCredits = [
  "Original Songs by Pamela Maurer",
  "Costume Design by Mieka Van Der Ploeg",
  "Lighting Design by Jared Moore",
  "Scenic and Sound Design by Blake Montgomery",
];
const Commendations = [
  {
    title: "Best Farewell to Brick and Mortar",
    author: "Tony Adler",
    publication: "Chicago Reader",
  },
];
const Prev = {
  title: "Moby-Dick (2011)",
  link: "/blake-montgomery/productions/moby-2011",
};
const Next = {
  title: "Charles Dickens Begrudgingly",
  link: "/blake-montgomery/productions/dickens",
};

export default async function Quixote() {
  const images = await getQuixoteImages();

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
              No images found in /public/productions/quixote.
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
