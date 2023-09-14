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
      <body className='ms-10 me-10 mt-5 mb-5 dark_BGPrimary dark_TextPrimary'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
