// app/layout.js
import './globals.css'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'LycheeByte Site',
  description: 'Website for LycheeByte',
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