import type { Metadata } from 'next';
import { sansSerif, serif } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'clownshow',
  description: 'creation and performance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={sansSerif.className}>
        {children}
        </body>
    </html>
  );
}
