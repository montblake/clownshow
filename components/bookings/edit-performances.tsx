// 'use client';

import { MouseEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { reverseFormatDate, reverseFormatTime } from '@/lib/utils';

import { fetchPerformancesByBookingId } from '@/lib/data';

import { updatePerformance } from '@/lib/actions';
import { DeletePerformance } from './buttons';

export default async function EditPerformances({
  bookingId,
}: {
  bookingId: string;
  // performances: { id: string; date_time: Date }[];
  // setShowUpdate: (show: boolean) => void;
}) {
  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowUpdate(false);
  // };

  const performances = await fetchPerformancesByBookingId(bookingId);

  return (
    <>
      {performances.map((perf) => (
        <div key={perf.id} className="mb-2 flex items-center gap-4">
          <div className="flex items-center">
            <label htmlFor={`date-${perf.id}`} className="mr-2 text-sm">
              Date
            </label>
            <input
              type="date"
              name={`date-${perf.id}`}
              id={`date-${perf.id}`}
              className="rounded-md border border-gray-200 bg-white px-[14px] py-3"
              defaultValue={reverseFormatDate(
                perf.date_time.toLocaleString().split(', ')[0],
              )}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor={`time-${perf.id}`} className="mr-2 text-sm">
              Time
            </label>
            <input
              type="time"
              name={`time-${perf.id}`}
              id={`time-${perf.id}`}
              className="rounded-md border border-gray-200 bg-white px-[14px] py-3"
              defaultValue={reverseFormatTime(
                perf.date_time.toLocaleString().split(', ')[1],
              )}
            />
          </div>
        </div>
      ))}
    </>
  );
}
