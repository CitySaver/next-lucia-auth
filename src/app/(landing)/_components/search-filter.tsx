"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { search } from "@/lib/auth/actions";
import { SubmitButton } from "@/components/submit-button";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const githubUrl = "#";
const twitterUrl = "#";

const suggest = [
    { name: "suggested 1", value: "1" },
    { name: "suggested 2", value: "2" },
    { name: "suggested 3", value: "3" },
];

const feature = [
    { name: "features 1", value: "1" },
    { name: "features 2", value: "2" },
    { name: "features 3", value: "3" },
];

const distance = [
    { name: "distance 1", value: "1" },
    { name: "distance 2", value: "2" },
    { name: "distance 3", value: "3" },
];

const category = [
    { name: "category 52", value: "52" },
    { name: "category 2", value: "2" },
    { name: "category 3", value: "3" },
    { name: "category 4", value: "4" },
];

export function SearchFilter({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
    const handleSearch = useDebouncedCallback((term) => {
      console.log(`Searching... ${term}`);
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    }, 300);

    const [state, formAction] = useFormState(search, null);
    
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true);

    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No profile data</p>

    const [suggested, setSuggested] = useState(
        suggest.map((cat) => ({ ...cat, isChecked: false }))
    );
    const [features, setFeatures] = useState(
        feature.map((cat) => ({ ...cat, isChecked: false }))
    );
    const [categories, setCategories] = useState(
        category.map((cat) => ({ ...cat, isChecked: false }))
    );
    const [distances, setDistances] = useState(
        distance.map((cat) => ({ ...cat, isChecked: false }))
    );

    const onChangeSuggested = (e: {
        target: { checked: boolean; value: React.SetStateAction<string> };
        }) => {
        const { value, checked: isChecked } = e.target;
        setSuggested((prev) =>
            prev.map((ct) => {
            if (ct.value === value) ct.isChecked = isChecked;
            return ct;
            })
        );
        console.log("radio", e.target.value);
        console.log("radio", e.target.checked);
        console.log("suggested", suggested);
    };
    const onChangeFeatures = (e: {
        target: { checked: boolean; value: React.SetStateAction<string> };
        }) => {
        const { value, checked: isChecked } = e.target;
        setFeatures((prev) =>
            prev.map((ct) => {
            if (ct.value === value) ct.isChecked = isChecked;
            return ct;
            })
        );
        console.log("radio", e.target.value);
        console.log("radio", e.target.checked);
        console.log("features", features);
    };
    const onChangeCategory = (e: {
        target: { checked: boolean; value: React.SetStateAction<string> };
        }) => {
        const { value, checked: isChecked } = e.target;
        setCategories((prev) =>
            prev.map((ct) => {
            if (ct.value === value) ct.isChecked = isChecked;
            return ct;
            })
        );
        console.log("radio", e.target.value);
        console.log("radio", e.target.checked);
        console.log("categories", categories);
    };
    const onChangeDistance = (e: {
        target: { checked: boolean; value: React.SetStateAction<string> };
        }) => {
        const { value, checked: isChecked } = e.target;
        setDistances((prev) =>
            prev.map((ct) => {
            if (ct.value === value) ct.isChecked = isChecked;
            return ct;
            })
        );
        console.log("radio", e.target.value);
        console.log("radio", e.target.checked);
        console.log("distances", distances);
    };

    return (
        <>
        <div className="container items-center">
        <h3 className="font-medium mb-4">Filters</h3>
        <form action={formAction} className="space-y-4">
            <div className="border-b border-slate-200 py-3">
                <div className="relative flex flex-1 flex-shrink-0">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        placeholder={placeholder}
                        onChange={(e) => {
                            handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                    />
                </div>
            </div>
            <div className="border-b border-slate-200 py-3">
                <p className="text-sm font-medium pb-2">Suggested</p>
                {suggested.map((item,index) => (
                <fieldset key={index}>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <Input
                                placeholder={item.name}
                                name='suggested'
                                type="radio"
                                value={item.value}
                                id={item.name}
                                onChange={onChangeSuggested}
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor={item.name} className="font-medium text-gray-900">
                            {item.name}
                            </label>{' '}
                        </div>
                    </div>
                </fieldset>
                ))} 
            </div>
            <div className="border-b border-slate-200 py-3">
                <p className="text-sm font-medium pb-2">Features</p>
                {features.map((item,index) => (
                <fieldset key={index}>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <Input
                                placeholder={item.name}
                                name='features'
                                type="radio"
                                value={item.value}
                                id={item.name}
                                onChange={onChangeFeatures}
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor={item.name} className="font-medium text-gray-900">
                            {item.name}
                            </label>{' '}
                        </div>
                    </div>
                </fieldset>
                ))} 
            </div>
            <div className="border-b border-slate-200 py-3">
                <p className="text-sm font-medium pb-2">Category</p>
                <div className="relative grid grid-cols-2 items-start">
                    {categories.map((item, index) => (
                    <fieldset key={index}>
                        <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                                <Input
                                    placeholder={item.name}
                                    name='category'
                                    type="radio"
                                    value={item.value}
                                    id={item.name}
                                    onChange={onChangeCategory}
                                />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                                <label htmlFor={item.name} className="font-medium text-gray-900">
                                {item.name}
                                </label>{' '}
                            </div>
                        </div>
                    </fieldset>
                    ))} 
                </div>
            </div>
            <div className="border-b border-slate-200 py-3">
                <p className="text-sm font-medium pb-2">Distance</p>
                {distances.map((item,index) => (
                <fieldset key={index}>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <Input
                                placeholder={item.name}
                                name='distance'
                                type="radio"
                                value={item.value}
                                id={item.name}
                                onChange={onChangeDistance}
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor={item.name} className="font-medium text-gray-900">
                            {item.name}
                            </label>{' '}
                        </div>
                    </div>
                </fieldset>
                ))} 
            </div>
            <SubmitButton className="w-full">Search</SubmitButton>
        </form>
    </div>
        
        </>
    );
};
