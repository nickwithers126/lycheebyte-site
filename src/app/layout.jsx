// app/layout.js
import './globals.css'
import Navbar from '@/components/Navbar'
import Popup from '@/components/Popup'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'LycheeByte',
  description: 'LycheeByte – Innovative and sustainable CMP and cleaning solutions',
  icons: {
    icon: '/favicon.ico',
    apple:'/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <Popup />
        {children}
        <Footer />
      </body>
    </html>
  )
}