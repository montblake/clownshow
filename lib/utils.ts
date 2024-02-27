// app/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateTime = (dateStr: string) => {
  const locale = 'en-US';
  const datetime = new Date(dateStr);
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const dateFormatter = new Intl.DateTimeFormat(locale, dateOptions);
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeStyle: 'short',
    hour12: true,
  };
  const timeFormatter = new Intl.DateTimeFormat(locale, timeOptions);
  return `${dateFormatter.format(datetime)} at ${timeFormatter.format(datetime)}`;
};

export const reverseDateTime = (dateStr: string) => {
  console.log('DATE STRING', dateStr);
  const datetime = new Date(dateStr);
  console.log('DATETIME', datetime.getMonth());
};

export const extractDateTimePairs_Update = async (dataObject: any) => {
  const dateTimeArray = [];
  for (const key in dataObject) {
    if (key.startsWith('date-')) {
      const id = key.replace('date-', '');
      const datePart = dataObject[key];
      const timeKey = key.replace('date-', 'time-');
      const timePart = dataObject[timeKey];
      const dateTimeString = `${datePart}T${timePart}:000`;
      const object = { id: id, dateTime: dateTimeString };
      dateTimeArray.push(object);
    }
  }
  return dateTimeArray;
};

export const extractDateTimePairs_Create = async (dataObject: any) => {
  const dateTimeArray = [];
  for (const key in dataObject) {
    if (key.startsWith('date-')) {
      // const id = key.replace('date-', '');
      const datePart = dataObject[key];
      const timeKey = key.replace('date-', 'time-');
      const timePart = dataObject[timeKey];
      const dateTimeString = `${datePart}T${timePart}:000`;
      // const object = { id: id, dateTime: dateTimeString }
      dateTimeArray.push(dateTimeString);
    }
  }
  return dateTimeArray;
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const reverseFormatDate = (rawDate: string) => {
  let date = rawDate.split('/');
  if (date[1].length === 1) {
    date[1] = `0${date[1]}`;
  }
  if (date[0].length === 1) {
    date[0] = `0${date[0]}`;
  }
  return `${date[2]}-${date[0]}-${date[1]}`;
};

export const reverseFormatTime = (rawTime: string) => {
  let [time, indicator] = rawTime.trim().split(' ');

  let [hours, minutes] = time.split(':');
  if (indicator === 'PM') {
    hours = (parseInt(hours) + 12).toString();
  }
  if (hours.length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};
