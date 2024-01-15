import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const globalFont = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={globalFont.className}>{children}</body>
    </html>
  )
}
