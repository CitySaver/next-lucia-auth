'use server';

import Image from 'next/image';
import Link from 'next/link';

import { fetchFilteredBrandOne } from "@/lib/auth/actions";
import Rating from '@/app/(landing)/_components/star-rating/rating';

export default async function BrandPage({
    brandid,
    categoryid
  }: {
    brandid: string;
    categoryid: string;
  }) {
    const [brands] = await Promise.all([fetchFilteredBrandOne(brandid,categoryid)]);

    return (
      <div className="mt-6 flow-root">
        
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                >
                <div
                    style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                >
                <div
                    style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{brands.name}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    {brands.address}<br/>{brands.address2}
                </p>
                <div className='flex justify-center text-white'>
                <Rating isEditable={false} rating={brands.rating}/> | ({brands.no_of_rate})
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                
                </p>
            </div>
        </div>
        
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
                    <tr
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                              <Image
                              src={brands.image_url}
                              className="rounded-full"
                              width={28}
                              height={28}
                              alt={`${brands.name}'s profile picture`}
                              />
                              <p>{brands.name}</p>
                        </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {brands.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {brands.latitude}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                        {brands.longitude}
                        </td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }