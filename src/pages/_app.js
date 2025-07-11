// src/pages/_app.js
import '../../src/app/globals.css'; // Tailwind/global CSS
import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
