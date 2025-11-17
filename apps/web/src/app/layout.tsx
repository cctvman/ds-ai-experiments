import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getCssText, globalStyles } from '@ds/design-system'

const inter = Inter({ subsets: ['latin'] })

// Apply global styles
globalStyles()

export const metadata: Metadata = {
  title: 'Design System Demo',
  description: 'B2B Design System demonstration application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
