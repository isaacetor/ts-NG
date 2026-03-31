import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { satoshi } from './fonts';
import { WaitlistModalProvider } from '../context/WaitlistModalContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Trybesave - Work Hard, Keep More of Your Money',
  description:
    'Save consistently, control spending, and track remittances with Trybesave. Build financial security whether in UK or supporting family across borders.',
  generator: 'TrybeSave',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        /> */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WaitlistModalProvider>{children}</WaitlistModalProvider>
      </body>
    </html>
  );
}
