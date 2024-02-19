import Form from '@/components/shows/edit-form';
import Breadcrumbs from '@/components/breadcrumbs';
import { fetchShowById } from '@/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const show = await fetchShowById(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Shows', href: '/tour/shows' },
          {
            label: 'Edit Show',
            href: `/tour/shows/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form show={show} />
    </main>
  );
}
