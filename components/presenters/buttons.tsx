import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';

export function CreatePresenter() {
  return (
    <Button variant="outline" size="icon">
      <PlusIcon className="w-6" />
    </Button>
  );  
}