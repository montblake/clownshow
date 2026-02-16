import Link from "next/link";

export default function BlakeHeader() {
  return (
    <header className="flex flex-row items-start justify-between w-full py-4 px-12 bg-neutral-950 text-neutral-300 flex-shrink-0 h-[6rem]">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-2xl uppercase">Blake Montgomery</h1>
        <p className="text-sm text-neutral-400 uppercase -mt-1">Theater</p>
      </div>
      <nav className="flex flex-row items-center justify-center gap-8">
        <Link href="/blake-montgomery">Home</Link>
        <Link href="/blake-montgomery/productions">Production History</Link>
        <Link href="/blake-montgomery/contact">Contact</Link>
      </nav>
    </header>
  );
}
