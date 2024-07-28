import React, { Suspense, lazy } from 'react';
import CityCard from './CityCard';
import Button from './ui/button';
import { Info } from 'lucide-react';

const Map = lazy(() => import('./Map'));

const cityCardData = [
  { city: 'Bangalore', absolute_value: 45.5, relative_value: 10 },
  { city: 'Delhi', absolute_value: 60, relative_value: 20 },
  { city: 'Mumbai', absolute_value: 55, relative_value: 30 },
  { city: 'Chennai', absolute_value: 30, relative_value: 40 },
  { city: 'Kolkata', absolute_value: 42, relative_value: 50 },
  { city: 'Hyderabad', absolute_value: 38.9, relative_value: 60 },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute backdrop-blur-sm z-[9999] top-0 left-0 max-w-[100%]">
        <div className="p-12">
          <div className="flex text-white items-center gap-4 mb-8">
            <h1 className="text-3xl">Hello User,</h1>
            <Button className="bg-[#72CFFF] text-black hover:bg-[#72CFFFAA]">
              <Info className="mr-2" />
              There are 2 action items.
            </Button>
          </div>
          <div className="flex max-w-[calc(100vw-52px)] overflow-x-auto gap-3 p-2 city_cards">
            {cityCardData.map((cityData, idx) => (
              <CityCard
                key={idx}
                city={cityData.city}
                absolute_value={cityData.absolute_value}
                relative_value={cityData.relative_value}
              />
            ))}
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading map...</div>}>
        <Map />
      </Suspense>
    </div>
  );
}
