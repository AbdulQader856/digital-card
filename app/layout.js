import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer';
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
      <body className='${inter.className} min-h-screen flex flex-col'>
        <AppProvider>
          <Header/>     
          <main className="flex-grow">{children}</main>
          <Footer/>
        </AppProvider>
      </body>
    </html>
  )
}