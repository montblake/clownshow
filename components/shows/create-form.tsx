import Link from 'next/link';
import { createShow } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export default function Form() {
  return (
    <form action={createShow} className="w-full md:max-w-[600px]">
      <div className="grid w-full gap-4">
        {/* Show Title */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="show_title">Title</Label>
          <Input
            id="show_title"
            name="show_title"
            type="text"
            placeholder="Enter show title"
            />
        </div>
        {/* Short Description */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="short_description">Short Description</Label>
          <Textarea
            placeholder="Enter description (255 characters max)."
            id="short_description"
            name="short_description"
            />
        </div>
        {/* Running Time */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="running_time_in_minutes">Running Time</Label>
          <Input
            id="running_time_in_minutes"
            name="running_time_in_minutes"
            type="number"
            placeholder="Enter running time in minutes"
            />
        </div>
        {/* Number of Intermissions */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="num_intermissions">Number of Intermissions</Label>
          <Input
            id="num_intermissions"
            name="num_intermissions"
            type="number"
            placeholder="Enter an integer"
          />
        </div>
        {/* Cast Size */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="cast_size">Cast Size</Label>
          <Input
            id="cast_size"
            name="cast_size"
            type="number"
            placeholder="Enter an integer"
          />
        </div>
        {/* Full Description */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="long_description">Full Description</Label>
          <Textarea
            placeholder="Enter description."
            id="long_description"
            name="long_description"
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-6 flex justify-start gap-4">
        <Link
          href="/tour/shows"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
