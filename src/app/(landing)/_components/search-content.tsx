'use server';

import Image from 'next/image';
import Link from 'next/link';

import { fetchFilteredBrands } from "@/lib/auth/actions";
import SearchCardBox from "../_components/search-card-box";

export default async function SearchContent({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    const [brands] = await Promise.all([fetchFilteredBrands(query, currentPage)]);

    return (
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle w-full">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
            </div>
            <table className="hidden min-w-full text-gray-900 md:table table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Brands
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Emails
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Latitude
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Longitude
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {brands.map((brand, i) => (
                    <tr
                        key={brand.id}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                            <Link href={`/search/brand/${brand.category_id}/${brand.id}`}>
                              <Image
                              src={brand.image_url}
                              className="rounded-full"
                              width={28}
                              height={28}
                              alt={`${brand.name}'s profile picture`}
                              />
                              <p>{brand.name}</p>
                            </Link>
                        </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {brand.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {brand.latitude}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {brand.longitude}
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }