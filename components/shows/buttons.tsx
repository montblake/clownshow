import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CreateShow() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/tour/shows/create">
        <PlusIcon className="w-6" />
      </Link>
    </Button>
  );
}
