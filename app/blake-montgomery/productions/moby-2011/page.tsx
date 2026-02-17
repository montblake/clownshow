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

const Title = "Moby-Dick (2011)";
const Credits = [
  "Adapted from the novel by Herman Melville",
  "Conceived and Directed by Blake Montgomery",
  "Created and performed by Chelsea Keenan, Rachel Griesinger, Sarah Hecht, Ian Knox, Jonathan Stutzman, and Nathan Wonder",
  "Original Music by Kevin O'Donnell",
];
const SecondCredits = [
  "Costume Design by Izumi Inaba",
  "Lighting Design by Daniel Osburn",
  "Scenic and Prop Design by Blake Montgomery",
];
const Commendations = [
  {
    title: "Jeff Award for New Adaptation (Blake Montgomery)",
    author: "",
    publication: "",
  },
  {
    title: "Jeff Award for Original Incidental Music (Kevin O'Donnell)",
    author: "",
    publication: "",
  },
  {
    title:
      "Jeff Award for Artistic Specialization (Casy Baker, Kevin O'Donnell, Mike Przygoda - Percussion)",
    author: "",
    publication: "",
  },
  {
    title: "Jeff Award-Nominated for Ensemble",
    author: "",
    publication: "",
  },
  {
    title: "Jeff Award-Nominated for Director - Play (Blake Montgomery)",
    author: "",
    publication: "",
  },
];
const Prev = {
  title: "Hansel und Gretel",
  link: "/blake-montgomery/productions/hansel",
};
const Next = {
  title: "Dawn, Quixote",
  link: "/blake-montgomery/productions/quixote",
};

export default async function Moby2011() {
  const images = await getMoby2011Images();

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
              No images found in /public/productions/moby/2006.
            </p>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="mt-0 text-sm text-neutral-400">
                Photos by Michael Brosilow
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
