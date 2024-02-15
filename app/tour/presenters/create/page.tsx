import Form from '@/components/presenters/create-form';
import Breadcrumbs from '@/components/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Presenters', href: '/tour/presenters' },
          {
            label: 'Create Presenter',
            href: '/tour/presenters/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
