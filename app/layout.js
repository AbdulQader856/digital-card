import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DigiBcard',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"
            defer
            ></script>
        </head>
        <body className={inter.className}>
     
            {children}
 
        </body>
    </html>
  )
}