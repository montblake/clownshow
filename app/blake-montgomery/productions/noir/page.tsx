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

async function getNoirImages() {
  const imagesDir = path.join(process.cwd(), "public", "productions", "noir");

  const files = await fs.readdir(imagesDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/productions/noir/${file}`,
      alt: `Noir still ${index + 1}`,
    }));
}

const Title = "Noir";
const Credits = [
  "Conceived and Directed by Blake Montgomery",
  "Created and performed by Fannie Hungerford, Chelsea Keenan, Sarah Goeden, Daiva Bhandari, David Amaral, Eddie Bennett",
];
const SecondCredits = [
  "Lighting Design by Lee Keenan",
  "Costume Design by Meghan Raham",
];
const Commendations = [
  {
    title: "After Dark Award for Technical Achievement",
    author: "",
    publication: "",
  },
];

const Prev = {
  title: "Moby-Dick (2006)",
  link: "/blake-montgomery/productions/moby-2006",
};
const Next = {
  title: "Franklin Expedition",
  link: "/blake-montgomery/productions/franklin",
};

export default async function Noir() {
  const images = await getNoirImages();

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
              No images found in /public/productions/noir.
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
