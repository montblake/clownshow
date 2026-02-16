import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-screen mx-auto bg-neutral-200 flex flex-col justify-start items-center">
      <main className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full bg-neutral-800 pt-8 pb-0">
          <div className="flex flex-col items-center justify-start w-full pb-8">
            <Image
              src="/clownshow_tent.png"
              alt="Clownshow Logo"
              width={300}
              height={300}
              className="w-[80px] -mb-6"
            />
            <p className="font-heading text-sm md:text-base text-neutral-400  drop-shadow-2xl max-w-[1000px] mt-0 px-12 py-8 sm:px-16 md:px-20 lg:px-24">
              <span className="text-neutral-200">Clownshow</span> is a creative
              production company specializing in the development of original
              live theater from concept to performance. Blake Montgomery is the
              Producing Artistic Director.
            </p>
            <a
              href="mailto:blake@thisisaclownshow.com"
              className="bg-neutral-400 rounded-xl px-8 py-2 gap-2 text-neutral-800 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase hover:bg-neutral-200 transition-all duration-300 active:underline"
            >
              get in touch
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 px-12 pt-4 pb-12 sm:px-16 md:px-20 lg:px-24 w-full max-w-[1000px]">
          <Image
            src="/this_is_a_clownshow.png"
            alt="Clownshow Logo"
            width={300}
            height={300}
            className="mt-8 mb-8"
          />
          <div className="flex flex-col md:flex-row md:gap-8 items-start justify-center w-full">
            <div className="w-1/2 flex flex-col items-center justify-center bg-neutral-950 rounded-xl p-4">
              <Image
                src="/2025_dickens_web.jpg"
                alt="2025 Dickens Show Publicity Image"
                width={800}
                height={800}
                className="rounded-t-xl w-full"
              />
              <p className="font-heading text-sm sm:text-base md:text-base bg-neutral-950 text-neutral-400 px-6">
                Blake Montgomery&apos;s Jeff Award-winning holiday solo show, in
                a newly revised production directed by Jonathan Berry, will be
                performed in Chicago at Theater Wit from December 4&ndash;28,
                2025.
              </p>
              <a
                href="https://www.theaterwit.org/tickets/productions/564/performances#top"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-400 rounded-xl px-8 py-2 gap-2 text-neutral-800 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase hover:bg-neutral-200 transition-all duration-300 active:underline my-8"
              >
                purchase tickets
              </a>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <p className="font-heading text-sm sm:text-base md:text-base text-neutral-800  drop-shadow-2xl  mt-4">
                Now over 200 years old, Charles Dickens finds himself once again
                booked to perform his overly familiar Christmas tale just as he
                has every December since 1853. Dickens, however, has other
                ideas.
              </p>
              <p className="font-heading text-sm sm:text-base md:text-base text-neutral-800  drop-shadow-2xl  mt-4">
                Perhaps he&apos;ll get his wish of simply hosting a festive
                holiday party. Or, perhaps, the Spirits of Christmas might
                intervene to give him what he really needs: a chance to
                rediscover the beauty in his work — and the joy of sharing it
                with an audience — one more time.
              </p>
              <p className="font-heading text-sm sm:text-base md:text-base text-neutral-800  drop-shadow-2xl max-w-[600px] mt-4">
                Told in, around, and with the audience, this one-man yuletide
                tour de force is more festive party than traditional oration.
                The perfect balance of dramatic and playful, it is a remarkably
                artful riff on Dickens&apos;s original and a charming new
                holiday tradition to share with friends and family.
              </p>
              <a
                href="https://www.dickensagain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-700 rounded-xl px-8 py-2 gap-2 text-neutral-200 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase mt-8 hover:bg-neutral-900 transition-all duration-300 active:underline"
              >
                explore show
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row md:gap-8 items-start justify-center w-full">
          <div className="w-1/2 flex flex-col items-center justify-center bg-neutral-950 rounded-xl p-4">
            <Image
              src="/moby_2025_web.jpg"
              alt="2025 Dickens Show Publicity Image"
              width={500}
              height={800}
              className="rounded-xl w-[300px] border border-neutral-400 p-4"
            />
            <p className="font-heading text-sm sm:text-base md:text-base bg-neutral-950 text-neutral-400 px-6">
              Blake Montgomery&apos;s Jeff Award-winning holiday solo show, in a
              newly revised production directed by Jonathan Berry, will be
              performed in Chicago at Theater Wit from December 4&ndash;28,
              2025.
            </p>
            <a
              href="https://www.theaterwit.org/tickets/productions/564/performances#top"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-400 rounded-xl px-8 py-2 gap-2 text-neutral-800 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase hover:bg-neutral-200 transition-all duration-300 active:underline my-8"
            >
              purchase tickets
            </a>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <p className="font-heading text-sm sm:text-base md:text-base text-neutral-800  drop-shadow-2xl  mt-4">
              Now over 200 years old, Charles Dickens finds himself once again
              booked to perform his overly familiar Christmas tale just as he
              has every December since 1853. Dickens, however, has other ideas.
            </p>
            <p className="font-heading text-sm sm:text-base md:text-base text-neutral-800  drop-shadow-2xl  mt-4">
              Perhaps he&apos;ll get his wish of simply hosting a festive
              holiday party. Or, perhaps, the Spirits of Christmas might
              intervene to give him what he really needs: a chance to rediscover
              the beauty in his work — and the joy of sharing it with an
              audience — one more time.
            </p>
            <p className="font-heading text-sm sm:text-base md:text-base text-neutral-800  drop-shadow-2xl max-w-[600px] mt-4">
              Told in, around, and with the audience, this one-man yuletide tour
              de force is more festive party than traditional oration. The
              perfect balance of dramatic and playful, it is a remarkably artful
              riff on Dickens&apos;s original and a charming new holiday
              tradition to share with friends and family.
            </p>
            <a
              href="https://www.dickensagain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-700 rounded-xl px-8 py-2 gap-2 text-neutral-200 text-xs flex flex-col items-center justify-center text-sm text-neutral-200 uppercase mt-8 hover:bg-neutral-900 transition-all duration-300 active:underline"
            >
              explore show
            </a>
          </div>
        </div> */}
      </main>

      <footer className="text-center bg-neutral-800 w-full p-8">
        <p className="text-neutral-400 text-sm">
          © 2025 CLOWNSHOW LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
