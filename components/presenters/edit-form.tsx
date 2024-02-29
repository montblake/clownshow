import Link from 'next/link';
import { updatePresenter } from '@/lib/actions';
import { PresenterFields } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Form({ presenter }: { presenter: PresenterFields }) {
  const updatePresenterWithId = updatePresenter.bind(null, presenter.id);

  return (
    <form action={updatePresenterWithId} className="w-full md:max-w-[600px]">
      <div className="grid w-full gap-4">
        {/* Presenter Name */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter venue name"
            defaultValue={presenter.name}
          />
        </div>
        {/* Presenter Location */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            type="text"
            placeholder="Enter venue city and state"
            defaultValue={presenter.location}
          />
        </div>
        {/* Presenter Contact */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="contact_name">Contact Name</Label>
          <Input
            id="contact_name"
            name="contact_name"
            type="text"
            placeholder="Enter first and last name"
            defaultValue={presenter.contact_name}
          />
        </div>
        {/* Presenter Contact Email */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="contact_email">Contact Email</Label>
          <Input
            id="contact_email"
            name="contact_email"
            type="text"
            placeholder="Enter email address for contact"
            defaultValue={presenter.contact_email}
          />
        </div>
        {/* Presenter Contact Telephone */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="contact_phone">Contact Phone</Label>
          <Input
            id="contact_phone"
            name="contact_phone"
            type="text"
            placeholder="Enter phone number for contact"
            defaultValue={presenter.contact_phone}
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/tour/presenters"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit</Button>
      </div>
    </form>
  );
}
