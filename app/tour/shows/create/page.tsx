import Form from '@/components/shows/create-form';
import Breadcrumbs from '@/components/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Shows', href: '/tour/shows' },
          {
            label: 'Create Show',
            href: '/tour/shows/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
