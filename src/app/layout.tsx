import type { Metadata } from 'next';

import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'YTDownloadify',
  description: 'Downloads YouTube videos to MP3/MP4 files.',
  keywords: 'youtube, mp3, mp4, converter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen dark_BGPrimary dark_TextPrimary'>
        <Navbar />
        <div className='flex flex-1 overflow-auto'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
