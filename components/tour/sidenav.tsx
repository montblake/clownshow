import Link from 'next/link';
import NavLinks from '@/components/tour/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { ModeToggle } from '@/components/tour/mode-toggle';
import { Button } from '@/components/ui/button';

export default function SideNav() {
  return (
    <>
      <Link
        className="m-1 mb-2 flex h-20 flex-col items-center justify-center rounded-xl bg-background bg-brand p-4 text-3xl font-bold drop-shadow hover:border-2 hover:border-brand lg:h-40"
        href="/"
      >
        <p className="rotate-3 text-white">clownshow</p>
      </Link>
      <div className="m-1 flex grow flex-col justify-between gap-2">
        <NavLinks />
        <div className="mb-0 flex gap-2 lg:mb-2 lg:flex-col">
          <ModeToggle />
          <Button
            variant="outline"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-xl bg-background p-3 text-sm font-medium text-brand drop-shadow hover:bg-brand-light hover:text-brand lg:justify-start lg:px-3 lg:py-0"
          >
            <PowerIcon className="w-6" />
            <p className="hidden sm:block">Sign Out</p>
          </Button>
        </div>
      </div>
    </>
  );
}
