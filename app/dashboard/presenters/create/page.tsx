import Form from '@/components/presenters/create-form';
import Breadcrumbs from '@/components/breadcrumbs';
// DOES FORM NEED TO FETCH SOME DATA, perhaps for a list of options from which to select?
// if so then this needs to be an async function

export default function Page() {
  // const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Presenters', href: '/dashboard/presenters' },
          {
            label: 'Create Presenter',
            href: '/dashboard/presenters/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}