// app/dashboard/page.tsx
import { Suspense } from 'react';
import {
  UnbookedPresentersSkeleton,
  MobyTourSkeleton,
  CardsSkeleton,
} from '@/components/skeletons';
import CardsWrapper from '@/components/dashboard/cards';
import MobyDickPerformances from '@/components/dashboard/mobydick-tour';
import UnbookedPresenters from '@/components/dashboard/unbooked-presenters';

export default async function Page() {
  return (
    <main className="w-full">
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Suspense fallback={CardsSkeleton}>
        <CardsWrapper />
      </Suspense>
      <div className="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={MobyTourSkeleton}>
          <MobyDickPerformances />
        </Suspense>
        <Suspense fallback={UnbookedPresentersSkeleton}>
          <UnbookedPresenters />
        </Suspense>
      </div>
    </main>
  );
}
