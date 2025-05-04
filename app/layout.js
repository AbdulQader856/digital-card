import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../src/components/layout/Header'
import { AppProvider } from '../src/context/AppContext';


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
        <body className={inter.className}>
          <AppProvider>
            <Header/>     
            <main className="pt-[64px]">{children}</main>
          </AppProvider>
        </body>
    </html>
  )
}