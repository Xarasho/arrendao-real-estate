import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arrendao Real Estate',
  description: 'The Real solution to all your Real Estate needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
