import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist_Mono } from 'next/font/google'

import { cn } from '@/lib/utils'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn('antialiased', geistMono.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
