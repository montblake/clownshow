import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-screen mx-auto bg-white flex flex-col justify-start items-center">
      <main className="flex flex-col items-center justify-center w-full bg-neutral-950">
        <Image
          src="/clownshow_logo_tent.png"
          alt="Clownshow Logo"
          width={300}
          height={300}
          className="p-4"
        />
        <div className="flex flex-col items-center justify-center bg-neutral-100 w-full pb-8">
          <p className="font-heading text-sm sm:text-base md:text-lg lg:text-xl text-neutral-800  drop-shadow-2xl max-w-[600px] mt-4 px-12 py-8 sm:px-16 md:px-20 lg:px-24">
            <span className="">Clownshow</span> is a creative production company
            specializing in the development of original live theater from
            concept to performance. Blake Montgomery is the Producing Artistic
            Director.
          </p>
          <a
            href="mailto:blake@thisisaclownshow.com"
            className="bg-neutral-800 rounded-xl px-8 py-2 gap-2 text-neutral-200 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase"
          >
            get in touch
          </a>
          <div className="flex flex-col items-center justify-center mt-4 px-12 pt-4 pb-12 sm:px-16 md:px-20 lg:px-24 w-full max-w-[600px]">
            <h2 className="font-heading text-lg font-bold sm:text-base md:text-lg lg:text-xl text-neutral-800  drop-shadow-2xl max-w-[600px] mt-4">
              current project
            </h2>
            <Image
              src="/2025_dickens_web.jpg"
              alt="2025 Dickens Show Publicity Image"
              width={800}
              height={800}
              className="border border-white rounded-xl"
            />
            <p className="font-heading text-sm sm:text-base md:text-lg lg:text-xl text-neutral-800  drop-shadow-2xl max-w-[600px] mt-4">
              Blake Montgomery&apos;s Jeff Award-winning holiday solo show, in a
              newly revised production directed by Jonathan Berry, will be
              performed in Chicago at Theater Wit from December 4&ndash;28,
              2025.
            </p>
            <a
              href="https://www.dickensagain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 rounded-xl px-8 py-2 gap-2 text-neutral-200 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase mt-8"
            >
              explore show
            </a>
          </div>
        </div>
      </main>

      <footer className="text-center bg-neutral-950 w-full p-8">
        <p className="text-neutral-300 text-sm">
          © 2025 CLOWNSHOW LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
