import { Button } from '@/components/ui/button';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deletePresenter } from '@/lib/actions';

export function CreatePresenter() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/tour/presenters/create">
        <PlusIcon className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export function EditPresenter({ id }: { id: string }) {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={`/tour/presenters/${id}/edit`}>
        <PencilIcon className="w-4 h-4" />
      </Link>
    </Button>
  );
}

export function DeletePresenter({ id }: { id: string }) {
  const deletePresenterWithId = deletePresenter.bind(null, id);

  return (
    <form action={deletePresenterWithId}>
      <Button variant="outline" size="icon">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4 h-4" />
      </Button>
    </form>
  );
}
