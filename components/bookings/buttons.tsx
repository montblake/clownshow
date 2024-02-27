import { Button } from '@/components/ui/button';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteBooking, deletePerformance } from '@/lib/actions';

export function CreateBooking() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/tour/bookings/create">
        <PlusIcon className="w-6" />
      </Link>
    </Button>
  );
}

export function DeleteBooking({ id }: { id: string }) {
  const deleteBookingWithId = deleteBooking.bind(null, id);

  return (
    <form action={deleteBookingWithId}>
      <Button variant="outline" size="icon">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </Button>
    </form>
  );
}

export function UpdateBooking({ id }: { id: string }) {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={`/tour/bookings/${id}/edit`}>
        <span className="sr-only">Edit</span>
        <PencilIcon className="w-4" />
      </Link>
    </Button>
  );
}

// export function UpdatePerformance({ onClick }: { onClick: () => void }) {
//   return (
//     <Button variant="outline" size="icon" onClick={onClick}>
//       {/* <Link href={`/tour/performances/${id}/edit`}> */}
//       <>
//         <span className="sr-only">Edit</span>
//         <PencilIcon className="w-4" />
//       </>
//       {/* </Link> */}
//     </Button>
//   );
// }

export function DeletePerformance({ id }: { id: string }) {
  const deletePerformanceWithId = deletePerformance.bind(null, id);

  return (
    <form action={deletePerformanceWithId} className="h-full justify-end">
      <Button variant="outline" size="icon" className="">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-6" />
      </Button>
    </form>
  );
}
