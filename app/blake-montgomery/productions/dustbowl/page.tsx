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

async function getDustbowlImages() {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "productions",
    "dustbowl",
  );

  const files = await fs.readdir(imagesDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/productions/dustbowl/${file}`,
      alt: `Dustbowl Gothic still ${index + 1}`,
    }));
}

const Title = "Dustbowl Gothic";
const Credits = [
  "Inspired by the painting by Grant Wood",
  "Conceived and Directed by Blake Montgomery",
  "Created and performed by Lori Myers, Leah Urzendowski, Sarah Goeden, Jeremy Sher, Alex Goodrich, and Chris Hibbard",
];
const SecondCredits = [
  "Original Music by Kevin O'Donnell",
  "Lighting Design by Michael Mahlum",
  "Scenic Design by Tracy Otwell",
];
const Commendations = [
  {
    title: "After Dark Award for Outstanding Production",
    author: "",
    publication: "",
  },
  {
    title: "Best of the Fringe in 2006",
    author: "Kerry Reid",
    publication: "Chicago Tribune",
  },
];

const Prev = {
  title: "Hamlet",
  link: "/blake-montgomery/productions/hamlet",
};
const Next = {
  title: "Moby-Dick (2006)",
  link: "/blake-montgomery/productions/moby-2006",
};

export default async function Dustbowl() {
  const images = await getDustbowlImages();

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
              No images found in /public/productions/dustbowl.
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
