"use client";

import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const updateTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <html lang="en">
      <head>
        <title>YTDownloadify</title>
        <meta name="description" content="Downloads YouTube videos to MP3/MP4 files." />
        <meta name="keywords" content="youtube, mp3, mp4, converter" />
        <meta name="author" content="Skyzser" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`flex flex-col h-screen ${theme}_BGPrimary ${theme}_Text`}>
        <Navbar theme={theme} updateTheme={updateTheme} />
        <div className='flex flex-1 overflow-auto'>{children}</div>
        <Footer theme={theme} />
      </body>
    </html>
  )
}