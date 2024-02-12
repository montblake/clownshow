'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Tour', href: '/tour', icon: HomeIcon },
  {
    name: 'Bookings',
    href: '/tour/bookings',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Presenters', href: '/tour/presenters', icon: UserGroupIcon },
  { name: 'Shows', href: '/tour/shows', icon: BookOpenIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex grow justify-start gap-2 lg:flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-xl bg-background p-3 text-sm font-medium drop-shadow hover:bg-brand-light hover:text-brand lg:flex-none lg:justify-start lg:p-2 lg:px-3',
              { 'bg-brand-light text-brand-dark': pathname === link.href },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden sm:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
