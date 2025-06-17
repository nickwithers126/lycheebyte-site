'use client'

import { useEffect, useState } from 'react'

export default function Popup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.get('submitted') === 'true') {
      setShow(true)
      setTimeout(() => {
        setShow(false)
        // Clean up the URL so ?submitted=true disappears
        url.searchParams.delete('submitted')
        window.history.replaceState({}, '', url.pathname + url.hash)
      }, 3000)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#64C084] text-white px-4 py-2 rounded shadow z-50">
      Thank you! Your message has been sent.
    </div>
  )
}
