import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full bg-white bg-bottom bg-no-repeat bg-cover p-4">
      <header className=" p-4 flex flex-col items-start justify-start gap-0 p-16 sm:p-24 md:p-36 lg:p-48 w-full">
        <h1 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tighter text-neutral-800  drop-shadow-2xl mb-4">
          <span className="text-red-600">clownshow</span> is a creative
          production company specializing in the development of original live
          theater, immersive events, and boundary-pushing experiences. Founded
          by Blake Montgomery, whose background in directing clown theater
          shapes the heart of our artistic vision, Clownshow is about more than
          just creating performances—it&apos;s about discovering the essence of
          each project and building worlds that engage and surprise audiences.
        </h1>
        <h1 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tighter text-neutral-800  mb-4">
          The name reflects our belief that every production needs something
          inherently &quot;clown&quot;—not in the traditional sense of red noses
          or big shoes, but in the deeper art of play, vulnerability, and
          unexpected transformation. We embrace the chaos and imperfection of
          live theater, knowing that, as in life, things often go wrong. Our
          mission is to turn these moments into a beautiful dance of linked
          recoveries, where spontaneity and resilience shine.
        </h1>
        <h1 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tighter text-neutral-800  drop-shadow-lg mb-4">
          We invite audiences to step into our uniquely crafted experiences,
          where the unexpected is celebrated, and the essence of storytelling
          takes center stage.
        </h1>
        <a href="https://www.begrudginglydickens.com" target="_blank">
          <div className="flex flex-col items-center justify-center gap-4 mb-24 w-full bg-red-600 p-8 rounded-lg my-8 hover:border-neutral-800 border-4 border-red-600">
            {/* <h1 className="font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter text-white w-full text-center ">
              CHARLES DICKENS
              <br />
              BEGRUDGINGLY PERFORMS
              <br />
              &lsquo;A CHRISTMAS CAROL&rsquo;
              <br />
              AGAIN
            </h1> */}
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
      </header>
      {/* <section className=" w-full bg-neutral-900 p-8 rounded-lg">
        <Image
          src="/dickens_publicity_2024.png"
          alt="Dickens Show Publicity Image"
          width={800}
          height={800}
          className="rounded-lg border border-neutral-400"
        />
        <div className="flex flex-col items-center justify-center gap-4 mb-24">
          <p className="font-header font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-200  drop-shadow-2xl py-4">
            Our inaugural show will be performed at{" "}
            <span className="font-bold">The Den Theatre</span> in Chicago from
            December 5 to December 22, 2024.
          </p>
          <button className="bg-neutral-200 text-neutral-900 p-2 rounded-lg">
            Explore the Show
          </button>
        </div>
      </section> */}
      <footer className="text-center fixed bg-white bottom-0 w-full p-8">
        <p className="text-neutral-600 text-sm">
          © 2024 CLOWNSHOW LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
