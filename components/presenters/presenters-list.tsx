import { fetchFilteredPresenters } from '@/lib/data';
import { PresenterFields } from '@/lib/definitions';
import { EditPresenter } from '@/components/presenters/buttons';
import ConfirmDeleteModal from '@/components/confirm-delete-modal';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function PresentersList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const presenters: PresenterFields[] = await fetchFilteredPresenters(
    query,
    currentPage,
  );

  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {presenters?.map((p) => (
        <Card key={p.id}>
          <CardHeader>
            <CardTitle>{p.name}</CardTitle>
            <CardDescription>{p.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="text-sm italic">Contact</h4>
            <p className="mb-2">{p.contact_name}</p>
            <h4 className="text-sm italic">Email</h4>
            <p className="mb-2">{p.contact_email}</p>
            <h4 className="text-sm italic">Phone</h4>
            <p>{p.contact_phone}</p>
          </CardContent>
          <CardFooter>
            <EditPresenter id={p.id} />
            <ConfirmDeleteModal resourceType="presenter" resourceId={p.id} />
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
}
