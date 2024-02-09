import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreatePresenter() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/dashboard/presenters/create">
        <PlusIcon className="w-6" />
      </Link>
    </Button>
  );
}

