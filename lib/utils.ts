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
