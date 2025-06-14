// app/layout.js
import './globals.css'

export const metadata = {
  title: 'LycheeByte Site',
  description: 'Website for LycheeByte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}