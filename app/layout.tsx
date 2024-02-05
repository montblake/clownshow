import type { Metadata } from 'next';
import { sansSerif, serif } from '@/app/fonts';
import './globals.css';

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
    <html lang="en">
      <body className={serif.className}>{children}</body>
    </html>
  );
}
