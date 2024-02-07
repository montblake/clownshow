import Link from 'next/link'
import { serif, sansSerif } from '@/styles/fonts';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-50 relative">
      {/* <div className="w-[80%] h-[75%] bg-red-500 rounded-full"></div> */}
      <h1 className={`text-6xl text-red-500 tracking-widest ${sansSerif.className} rotate-2`}>
        clownshow
      </h1>
      <Link href={"/dashboard"} className="text-slate-500 absolute bottom-4">dashboard</Link>
    </main>
  );
}
