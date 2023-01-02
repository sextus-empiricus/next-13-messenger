import React, { ReactNode } from 'react';

import Header from '../components/Header';

import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        {/* <Header/> is awaited and TS doesn't expect a Promise in JSX components structure.
        But there we are working with SSR hence it's fine!
        @ts-ignore */}
        <Header />
        {children}
      </body>
    </html>
  );
}
