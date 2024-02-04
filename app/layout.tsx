import type { Metadata } from 'next';
import { sansSerif, serif } from '@/app/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moby-Dick on Tour',
  description: 'A project app developed by Blake Montgomery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={serif.className}>{children}</body>
    </html>
  );
}
