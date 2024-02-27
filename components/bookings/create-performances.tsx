'use client';

import { MouseEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function CreatePerformances() {
  const [performances, setPerformances] = useState([{ date: '', time: '' }]);

  const handleAddPerformance = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPerformances([...performances, { date: '', time: '' }]);
  };

  const handleRemovePerformance = (index: number) => {
    setPerformances(performances.filter((_, i) => i !== index));
  };

  const handleDateChange = (index: number, value: string) => {
    const newPerformances = [...performances];
    newPerformances[index].date = value;
    setPerformances(newPerformances);
  };

  const handleTimeChange = (index: number, value: string) => {
    const newPerformances = [...performances];
    newPerformances[index].time = value;
    setPerformances(newPerformances);
  };

  return (
    <fieldset>
      <div className="mb-2 flex items-baseline justify-between">
        <legend className="mb-2 block text-sm font-medium">
          Set performances
        </legend>
        <Button variant="outline" size="sm" onClick={handleAddPerformance}>
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
                onChange={(e) => handleDateChange(i, e.target.value)}
                className="rounded-md border border-gray-200 bg-white px-[14px] py-3"
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
                onChange={(e) => handleTimeChange(i, e.target.value)}
                className="rounded-md border border-gray-200 bg-white px-[14px] py-3"
              />
            </div>
            {/* <Button variant="outline" size="icon" onClick={()=>handleRemove(i)}> */}
            <XCircleIcon
              className="w-8"
              onClick={() => handleRemovePerformance(i)}
            />
            {/* </Button> */}
          </div>
        ))}
      </div>
    </fieldset>
  );
}
