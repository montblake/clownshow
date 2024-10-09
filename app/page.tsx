import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen mx-auto bg-white flex flex-col justify-start items-center">
      <header className="flex flex-col items-center justify-center w-full bg-white px-12 py-12 sm:px-16 md:px-20 lg:px-24">
        <h1 className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter text-neutral-800  drop-shadow-2xl max-w-[600px]">
          <span className="text-red-600 text-3xl">clownshow</span> is a creative
          production company specializing in the development of original live
          theater, immersive events, and boundary-pushing experiences.
        </h1>
      </header>
      <section className="w-full bg-black h-3/4">
        <div className="px-12 py-12 sm:px-16 md:px-20 lg:px-24">
          <a href="https://www.begrudginglydickens.com" target="_blank">
            <div className="flex flex-col items-center justify-center gap-4 mb-24 w-full bg-red-600 p-8 rounded-lg hover:border-white border-4 border-red-600 max-w-[600px] mx-auto">
              <hr className="h-[1px] w-full my-0 bg-white border-0" />

              <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg">
                Our inaugural production, Blake Montgomery&apos;s Jeff
                Award-winning holiday solo show, will be performed at{" "}
                <span className="font-bold">The Den Theatre</span> in Chicago,
                December 5 – 22, 2024.
              </p>
              <hr className="h-[1px] w-full my-0 bg-white border-0 mb-4" />
              <Image
                src="/dickens_publicity_2024.png"
                alt="Dickens Show Publicity Image"
                width={800}
                height={800}
                className="rounded-lg border border-white"
              />
            </div>
          </a>
        </div>
      </section>

      <footer className="text-center fixed bg-white bottom-0 w-full p-8">
        <p className="text-neutral-600 text-sm">
          © 2024 CLOWNSHOW LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
