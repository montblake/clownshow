import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen mx-auto bg-white flex flex-col justify-start items-center">
      <header className="flex flex-col items-center justify-center w-full bg-white px-12 py-12 sm:px-16 md:px-20 lg:px-24 fixed top-0">
        <h1 className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter text-neutral-800  drop-shadow-2xl max-w-[600px]">
          <span className="text-red-600 text-3xl">clownshow</span> is a creative
          production company specializing in the development of original live
          theater, immersive events, and boundary-pushing experiences.
        </h1>
        <a
          href="mailto:dickens@dickensagain.com"
          className="bg-white hover:border-2 border-red-600 rounded-md p-2 text-red-500 text-xs aspect-square h-24 flex flex-col items-center justify-center mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
          <p>get in touch</p>
        </a>
      </header>
      <section className="w-full bg-black h-3/4 mt-44 sm:mt-44 md:mt-48 lg:mt-72">
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
              {/* <hr className="h-[1px] w-full my-0 bg-white border-0" /> */}

              <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg mt-2">
                click to learn more
              </p>
              {/* <hr className="h-[1px] w-full my-0 bg-white border-0 mb-4" /> */}
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
