import { type Metadata } from "next";

import { SearchTableSkeleton } from '@/components/ui/skeleton';
import BrandPage from "../brand-page";
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: "Brand - City Saver",
    description:
        "Brand - City Saver",
};

export default function Page({ params }: { params: { slug: string } }) {
    
    const brandid = params.slug[1] || '';
    const categoryid = Number(params.slug[0]) || 1;

    return (
        <>
            <Suspense key={params.slug} fallback={<SearchTableSkeleton />}>
                <BrandPage brandid={params.slug[1]} categoryid={params.slug[0]}/>
            </Suspense>
        </>
    );
}