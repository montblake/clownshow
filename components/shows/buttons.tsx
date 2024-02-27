import { Button } from '@/components/ui/button';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteShow } from '@/lib/actions';

export function CreateShow() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/tour/shows/create">
        <span className="sr-only">Create Show</span>
        <PlusIcon className="w-6" />
      </Link>
    </Button>
  );
}

export function UpdateShow({ id }: { id: string }) {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={`/tour/shows/${id}/edit`}>
        <span className="sr-only">Edit Show</span>
        <PencilIcon className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export function DeleteShow({ id }: { id: string }) {
  const deleteShowWithId = deleteShow.bind(null, id);

  return (
    <form action={deleteShowWithId}>
      <Button variant="outline" size="icon">
        <span className="sr-only">Delete</span>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
