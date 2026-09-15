import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IRSHAD — Digital Experiences',
  description: 'Cinematic portfolio for Mohamed Irshad — business, sales, hospitality and digital experience.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
