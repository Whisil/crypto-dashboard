'use client';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import './globals.css';
import clsx from 'clsx';
import { useState } from 'react';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={clsx('flex min-h-screen', inter.variable)}>
        <div className="hidden md:block">
          <Sidebar
            toggleOpen={() => setIsSidebarOpen((prev) => !prev)}
            isOpen={isSidebarOpen}
          />
        </div>
        <div className="w-full">
          <Header
            heading="Wallet"
            toggleOpenSidebar={() => setIsSidebarOpen((prev) => !prev)}
            isSidebarOpen={isSidebarOpen}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
