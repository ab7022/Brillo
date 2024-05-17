// Layout.js
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Arimo, Rubik } from 'next/font/google';
import { Providers } from './Providers';
import ResumeContextProvider from '@/components/context/ResumeData';
import ErrorBoundary from '@/components/app2'
import './globals.css'
const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
});

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${rubik.variable}`}>
        <Toaster position="top-center" />
        <ErrorBoundary>
        <Providers>
          <ResumeContextProvider>
            {children}
          </ResumeContextProvider>
        </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
