import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hunting House',
  description: 'This is the onepager for Hunting House',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
