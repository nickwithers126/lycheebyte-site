// app/layout.js
import './globals.css'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'LycheeByte',
  description: 'LycheeByte – Innovative and sustainable CMP and cleaning solutions',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}