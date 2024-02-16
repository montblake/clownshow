import Form from '@/components/presenters/edit-form';
import Breadcrumbs from '@/components/breadcrumbs';
import { fetchPresenterById } from '@/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const presenter = await fetchPresenterById(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Presenters', href: '/tour/presenters' },
          {
            label: 'Edit Presenter',
            href: `/tour/presenters/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form presenter={presenter} />
    </main>
  );
}
