"use client";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useRef, useState } from 'react';

// type FeaturesProps = {
//     brand: string;
//     description: string;
// }
type FeaturesProps = {}

const CardSpotlight = (props: FeaturesProps) => {
    const brandsarray = props.brands;
    return (
        <>
            {brandsarray.map((brand, i) => (
                <h1>{brand.name}</h1>
            ))}
        </>
    );
}

export default CardSpotlight;