'use client';

import { MouseEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { reverseDateTime } from '@/lib/utils';

export default function EditPerformances({
  performances,
}: {
  performances: Date[];
}) {
  console.log(
    'PERF IN EDIT PERF',
    performances.map((p) => p.toString()),
  );
  // const [performances, setPerformances] = useState(Array.from({ length: bookedPerformances.length}, (_, i) => 'performance'));

  // const addPerformance = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setPerformances([...performances, 'performance']);
  // };

  // const handleRemove = (index: number) => {
  //   setPerformances(performances.filter((_, i) => i !== index));
  // // };

  // const mappedPerformances = bookedPerformances.map(p => reverseDateTime(p.toString()));

  return (
    <fieldset>
      <div className="mb-2 flex items-baseline justify-between">
        <legend className="mb-2 block text-sm font-medium">
          Set performances
        </legend>
        <Button
          variant="outline"
          size="sm"
          // onClick={addPerformance}
        >
          <PlusIcon className="w-4" />
        </Button>
      </div>
      <div className="">
        {performances.map((p, i) => (
          <div
            key={i}
            className="mb-2 flex gap-8 rounded-md bg-gray-200 px-[14px] py-3"
          >
            <div className="flex items-center">
              <label htmlFor={`performance-${i}-date`} className="mr-2 text-sm">
                Date
              </label>
              <input
                type="date"
                name={`date-${i}`}
                id={`performance-${i}-date`}
                className="rounded-md border border-gray-200 bg-white px-[14px] py-3"
                // defaultValue={performances}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor={`performance-${i}-date`} className="mr-2 text-sm">
                Time
              </label>
              <input
                type="time"
                name={`time-${i}`}
                id={`time-${i}`}
                className="rounded-md border border-gray-200 bg-white px-[14px] py-3"
                // defaultValue={mappedPerformances[i].time}
              />
            </div>
            {/* <Button variant="outline" size="icon" onClick={()=>handleRemove(i)}> */}
            {/* <XCircleIcon className="w-8" onClick={() => handleRemove(i)} /> */}
            {/* </Button> */}
          </div>
        ))}
      </div>
    </fieldset>
  );
}
