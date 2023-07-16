import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import './globals.css';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: `Dashboard`,
  description: `Dashboard for your web3 assets`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx('flex min-h-screen', inter.variable)}>
        <Sidebar />
        <div className="w-full">
          <Header heading="Wallet" />
          {children}
        </div>
      </body>
    </html>
  );
}
