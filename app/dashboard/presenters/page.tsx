// app/dashboard/presenters/page.tsx

import Pagination from '@/components/pagination';
import Search from '@/components/presenters/search';
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
      <header className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-xl md:text-2xl">Presenters</h2>
      </header>
      <div className="my-4 flex items-center justify-between gap-2 md:my-8">
        <Search placeholder="Filter by presenter name, location, or contact..." />
        <CreatePresenter />
      </div>
      <Suspense fallback={PresentersListSkeleton}>
        <PresentersList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
