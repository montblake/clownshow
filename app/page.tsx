import Link from 'next/link';
import { sansSerif } from '@/styles/fonts';

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <h1
        className={`text-6xl tracking-widest text-foreground ${sansSerif.className} rotate-2`}
      >
        clownshow
      </h1>
      <Link href={'/tour'} className="absolute bottom-4 text-muted-foreground">
        Tour
      </Link>
    </main>
  );
}
