"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function CreatePerformances() {
  const [performances, setPerformances] = useState([
    { date: "", time: ""}
  ]);

  const addPerformance = () => {
    setPerformances([...performances, { date: "", time: ""}]);
  }

  const handleDateChange = (i, value) => {
    const changedPerformances = performances.map(
      (performance, index) => {
        if (index === i) {
          return { ...performance, date: value };
        } else {
          return performance;
        }
      }
    );
    return changedPerformances;
  } 

  const handleTimeChange = (i, value) => {
    const changedPerformances = performances.map(
      (performance, index) => {
        if (index === i) {
          return { ...performance, time: value };
        } else {
          return performance;
        }
      }
    );
    return changedPerformances;
  } 

  const handleRemove = (index: number) => {
    setPerformances(performances.filter((_, i)=> i !== index));
  }

  return (
    <fieldset>
      <div className="flex justify-between items-baseline mb-2">

      <legend className="mb-2 block text-sm font-medium">Set performances</legend>
      <Button variant="outline" size="sm" onClick={addPerformance}>
        <PlusIcon className="w-4" />
    </Button>
      </div>
      <div className="">
        {performances.map((p, i) => (        
          <div key={i} className="flex gap-8 bg-gray-200 mb-2 rounded-md py-3 px-[14px]">
            <div className="flex items-center">
              <label htmlFor={`performance-${i}-date`} className="text-sm mr-2">
                Date
              </label>
              <input type="date" name={`date-${i}`} id={`performance-${i}-date`} onChange={(e)=>handleDateChange(i, e.target.value)}
              className="rounded-md border border-gray-200 bg-white px-[14px] py-3"/>
            </div>
            <div className="flex items-center">
            <label htmlFor={`performance-${i}-date`} className="text-sm mr-2">
                Time
              </label>
              <input type="time" name={`time-${i}`} id={`time-${i}`} onChange={(e)=>handleTimeChange(i, e.target.value)}
              className="rounded-md border border-gray-200 bg-white px-[14px] py-3" />
            </div>
            {/* <Button variant="outline" size="icon" onClick={()=>handleRemove(i)}> */}
              <XCircleIcon className="w-8" onClick={()=>handleRemove(i)} />
            {/* </Button> */}
        </div>
      ))}
      </div>
    </fieldset>
  )

}