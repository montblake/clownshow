'use client';

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
import { deleteBooking, deletePerformance, deletePresenter, deleteShow } from '@/lib/actions';

export function ConfirmDeleteModal({  
  resourceId, 
  resourceType 
}: { 
  resourceId: string, 
  resourceType: string 
}) {

  const handleDelete = () => {
    const actions = {
      booking: deleteBooking,
      performance: deletePerformance,
      presenter: deletePresenter,
      show: deleteShow,
    };
  
    const action = actions[resourceType as keyof typeof actions];
    if (action) {
      action(resourceId);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone and will permanently delete this resource from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
