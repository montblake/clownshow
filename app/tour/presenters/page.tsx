// app/dashboard/presenters/page.tsx

import Pagination from '@/components/pagination';
import SearchPresenters from '@/components/presenters/search';
import { CreatePresenter } from '@/components/presenters/buttons';
import PresentersList from '@/components/presenters/presenters-list';
import { Suspense } from 'react';
import { PresentersListSkeleton } from '@/components/skeletons';
import { fetchPresentersPages } from '@/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchPresentersPages(query);

  return (
    <main className="w-full">
      <header className="mb-4 w-full md:mb-8">
        <div className="mb-2 flex w-full items-center justify-between">
          <h2 className="text-xl md:text-2xl">Presenters</h2>
          <CreatePresenter />
        </div>
        <SearchPresenters placeholder="Filter by presenter name, location, or contact..." />
      </header>
      <div className="my-2 flex w-full flex-col items-center justify-between gap-2 md:my-4">
        <Suspense fallback={PresentersListSkeleton}>
          <PresentersList query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
}
