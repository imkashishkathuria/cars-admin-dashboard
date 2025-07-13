// src/pages/_app.js
import { UserProvider } from '@/context/userContext';
import '../../src/app/globals.css'; // Tailwind/global CSS
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    );
}
