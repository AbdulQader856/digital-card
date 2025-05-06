import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from './clientlayout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DigiBcard',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className='${inter.className} min-h-screen flex flex-col'>
          <ClientLayout><main className="flex-grow">{children}</main></ClientLayout>
      </body>
    </html>
  )
}