'use client';

import Image from 'next/image';

import { fetchFilteredBrands } from "@/lib/auth/actions";

export default async function SearchContent({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    //const [brands, setTodos] = useState([]);

    const brands = await fetchFilteredBrands(query, currentPage);
    //setTodos(brandss);

    // const getBrands = async () =>{
    //     const res = await fetch(`https://city-saver.com/api/brands/`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer 1|NQ3mh1aBsYWU6z3pkmFMWyE58e0oEEBkIUdXOalHe25d449f`,
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //             'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //         },
    //         });
    //     return res.json()
    // }
    // const fllbrand = await getBrands();

    return (
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {brands && <div>
                  {brands?.data?.map((invoice) => (
                      <div
                      key={invoice.id}
                      className="mb-2 w-full rounded-md bg-white p-4"
                      >
                      <div className="flex items-center justify-between border-b pb-4">
                          <div>
                          <div className="mb-2 flex items-center">
                              <Image
                              src={invoice.image_url}
                              className="mr-2 rounded-full"
                              width={28}
                              height={28}
                              alt={`${invoice.name}'s profile picture`}
                              />
                              <p>{invoice.name}</p>
                          </div>
                          <p className="text-sm text-gray-500">{invoice.email}</p>
                          </div>
                      </div>
                      </div>
                  ))}
              </div>}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Brands
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {brands && <tr>
                    {brands?.data?.map((invoice) => (
                    <tr
                        key={invoice.id}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                            <Image
                            src={invoice.image_url}
                            className="rounded-full"
                            width={28}
                            height={28}
                            alt={`${invoice.name}'s profile picture`}
                            />
                            <p>{invoice.name}</p>
                        </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {invoice.email}
                        </td>
                    </tr>
                    ))}
                </tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }