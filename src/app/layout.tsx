import { Metadata } from 'next';

import Providers from '@/components/providers';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: 'YTDownloadify',
  description: 'Downloads YouTube videos to MP3/MP4 files.',
  keywords: 'youtube, mp3, mp4, converter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }}>
      <body className='flex flex-col h-screen'>
        <Providers>
          <Navbar />
          <div className='flex flex-1 overflow-auto'>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}