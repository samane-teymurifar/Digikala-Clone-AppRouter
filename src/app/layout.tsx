import '@app/globals.css';
import Header from '@src/layouts/header';
import React from 'react';
import localFont from 'next/font/local';
import Footer from '@src/layouts/footer';

const iranYekan = localFont({
  src: [
    {
      path: '../assets/fonts/Qs_Iranyekan bold.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Qs_Iranyekan light.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Qs_Iranyekan medium.ttf',
      weight: '400',
      style: 'italic'
    },
  ]
});
export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="fa" dir="rtl" className={iranYekan.className + ' scroll-smooth '}>
      <head>
      </head>
      <body className="flex min-h-screen flex-col ">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
