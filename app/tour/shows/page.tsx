// app/dashboard/shows/page.tsx

import ShowsList from '@/components/shows/shows-list';
import { Suspense } from 'react';
import { ShowsListSkeleton } from '@/components/skeletons';

export default async function Page() {
  return (
    <main className="w-full">
      <header className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-xl md:text-2xl">Shows</h2>
      </header>
      <div className="my-4 flex items-center justify-between gap-2 md:my-8">
        {/* <CreateShow /> */}
      </div>
      <Suspense fallback={ShowsListSkeleton}>
        <ShowsList />
      </Suspense>
    </main>
  );
}
