import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden bg-sky-900">
      <div className="h-auto w-full opacity-50 mix-blend-multiply">
        <Image
          src="/amit-shaiwale-gb4_QWFjIzM-unsplash.jpg"
          width={500}
          height={500}
          alt="The Sea"
          className="h-auto w-full"
        />
      </div>
      <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl text-slate-50">
        Moby-Dick on Tour
      </h1>
    </main>
  );
}
