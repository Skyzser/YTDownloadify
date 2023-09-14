"use client";

import type { Metadata } from 'next';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'YTDownloadify',
  description: 'Downloads YouTube videos to MP3/MP4 files.',
  keywords: 'youtube, mp3, mp4, converter',
}

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
      <body className={`flex flex-col h-screen ${theme}_BGPrimary ${theme}_Text`}>
        <Navbar theme={theme} updateTheme={updateTheme} />
        <div className='flex flex-1 overflow-auto'>{children}</div>
        <Footer theme={theme} />
      </body>
    </html>
  )
}