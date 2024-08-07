import { type Metadata } from "next";

import { SearchFilter } from "../_components/search-filter";
import Pagination from "../_components/search-pagination";
import SearchContent from "../_components/search-content";
import { SearchTableSkeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { fetchFilteredBrandsTotalPages } from "@/lib/auth/actions";

export const metadata: Metadata = {
  title: "Search - City Saver",
  description:
    "Search - City Saver",
};

export default async function HomePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchFilteredBrandsTotalPages(query);
    return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="p-5">
                  <SearchFilter placeholder="Search by name"/>
              </div>
              <div className="col-span-3 ">
                  <Suspense key={query + currentPage} fallback={<SearchTableSkeleton />}>
                      <SearchContent query={query} currentPage={currentPage} />
                  </Suspense>
                  <Pagination totalPages={totalPages} />
              </div>
              <div className=" bg-slate-300">
                  <p>Content</p>
              </div>
          </div>
        </>
    );
}