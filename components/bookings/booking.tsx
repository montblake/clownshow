import Performances from './performances';
import { UpdateBooking, DeleteBooking } from './buttons';
import { fetchBookingById } from '@/lib/data';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteBooking } from '@/lib/actions';

export default async function Booking({
  bookingId,
  editable,
}: {
  bookingId: string;
  editable: boolean;
}) {
  const b = await fetchBookingById(bookingId);

  const handleDelete = async () => {
    await deleteBooking(bookingId);
  };

  return (
    <>
      {editable && (
        <div className="mb-2 flex">
          <UpdateBooking id={b.id} />
          <DeleteBooking id={b.id} />
          {/*           
          <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <TrashIcon className="w-4 h-4" /> 
        
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            booking.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
          Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> */}
        </div>
      )}
      <div className="mb-2">
        <p className="">BOOKING ID: {b.id}</p>
      </div>
      <div className="mb-2">
        <p>Presenter:{b.presenter_name}</p>
        <p>Location: {b.presenter_location}</p>
        <p>Contact: {b.presenter_contact}</p>
      </div>
      <div className="mb-2">
        <p>Show: {b.show_title}</p>
        <p>Fee: {b.fee}</p>
        <p>Status: {b.payment_status}</p>
      </div>
      <div>
        <p>Performances:</p>
        <Performances bookingId={b.id} editable={editable} />
      </div>
    </>
  );
}
