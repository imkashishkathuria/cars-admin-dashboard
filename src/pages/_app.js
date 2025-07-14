// src/pages/_app.js
import { Inter } from "next/font/google";
import { UserProvider } from '@/context/userContext';
import "./../styles/globals.css" // Tailwind/global CSS
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <main className={inter.className}>
      <Component {...pageProps} />
      </main>
    </UserProvider>
    );
}
