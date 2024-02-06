import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-50">
      <div className="w-[120px] h-[120px] bg-red-500 rounded-full"></div>
      <h1 className="text-5xl text-slate-800">
        clownshow
      </h1>
      <Link href={"/dashboard"} className="text-slate-500">dashboard</Link>
    </main>
  );
}
