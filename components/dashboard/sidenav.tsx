import Link from 'next/link';
import NavLinks from '@/components/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import {ModeToggle} from '@/components/mode-toggle';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 bg-muted text-muted-foreground md:px-2 border-2">
      <Link
        className="mb-2 flex flex-col h-20 items-center justify-center rounded-lg bg-background p-4 md:h-40 text-3xl font-bold hover:border-2 hover:border-red-500"
        href="/"
      >
        <p className="text-red-500 rotate-3">
        clownshow
        </p>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-muted md:block"></div>
        <form>
          <ModeToggle />
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-background p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
