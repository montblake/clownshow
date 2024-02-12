// // app/dashboard/page.tsx
// import { Suspense } from 'react';
// import {
//   UnbookedPresentersSkeleton,
//   MobyTourSkeleton,
//   CardsSkeleton,
// } from '@/components/skeletons';
// import CardsWrapper from '@/components/tour/cards';
// import MobyDickPerformances from '@/components/tour/mobydick-tour';
// import UnbookedPresenters from '@/components/tour/unbooked-presenters';

export default async function Page() {
  return (
    <main className="w-full">
      <h1 className="mb-4 text-xl md:text-2xl">Touring</h1>
      <div className="mt-4">
        <h2>Tour Data, at a glance</h2>
        {/* <Suspense fallback={CardsSkeleton}>
          <CardsWrapper />
        </Suspense> */}
      </div>

      <div className="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-4">
        <h2>Important Data, topline details</h2>
        {/* <Suspense fallback={MobyTourSkeleton}>
          <MobyDickPerformances />
        </Suspense> */}
        {/* <Suspense fallback={UnbookedPresentersSkeleton}>
          <UnbookedPresenters />
        </Suspense> */}
      </div>
    </main>
  );
}
