import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YT2MP3',
  description: 'Converts YouTube videos to MP3 files.',
  keywords: 'youtube, mp3, converter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
