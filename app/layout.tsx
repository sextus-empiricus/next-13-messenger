import React, { ReactNode } from 'react';

import Header from '../components/Header';

import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
