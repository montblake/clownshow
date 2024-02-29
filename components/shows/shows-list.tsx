import { fetchShows } from '@/lib/data';
import { ShowFields } from '@/lib/definitions';
import { EditShow } from '@/components/shows/buttons';
import ConfirmDeleteModal from '@/components/confirm-delete-modal';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function ShowsList() {
  const shows: ShowFields[] = await fetchShows();

  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {shows?.map((show) => (
          <Card key={show.id}>
            <CardHeader>
              <CardTitle>{show.show_title}</CardTitle>
              {show.short_description && (
                <CardDescription>{show.short_description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <h4 className="text-sm italic">Running Time</h4>
              <p className="mb-4">{show.running_time_in_minutes} minutes</p>
              <h4 className="text-sm italic">Number of Intermissions</h4>
              <p className="mb-4">{show.num_intermissions}</p>
              <h4 className="text-sm italic">Cast Size</h4>
              <p className="mb-4">{show.cast_size}</p>
              <h4 className="text-sm italic">Full Description</h4>
              {show.long_description.split('\n').map((s, i) => (
                <p key={i} className="mb-4">
                  {s}
                </p>
              ))}
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <EditShow id={show.id} />
                <ConfirmDeleteModal resourceType="show" resourceId={show.id} />
            </CardFooter>
          </Card>
      ))}
    </ul>
  );
}
