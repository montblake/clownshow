import { Button } from '@/components/ui/button';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteShow, editShow } from '@/lib/actions';

export function CreateShow() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/tour/shows/create">
        <PlusIcon className="w-6" />
      </Link>
    </Button>
  );
}

export function EditShow() {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100">
      <span className="sr-only">Edit</span>
      <PencilIcon className="w-4" />
    </button>
  );
}

export function DeleteShow({ id }: { id: string }) {
  const deleteShowWithId = deleteShow.bind(null, id);

  return (
    <form action={deleteShowWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
