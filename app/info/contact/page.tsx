import React from 'react'
import Link from 'next/link'

// This is an nested page inside of info
// If you delete the page but not the folder it will cause an 404 error
function ContactPage() {
  return (
    <div>
      <h1 className='text-7xl'>Contact</h1>
      <Link href="/" className='text-xl text-blue-500 mt-8'>back home</Link>
    </div>
  )
}

export default ContactPage