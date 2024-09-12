import React from 'react'
import Link from 'next/link'

// Page it the home page of app and every other page needs an folder and file named page to be routed to.
// Link automatically routes to the class as it is built into Nextjs scripts
function HomePage() {
  return (
    <div>
      <h1 className='text-7xl'>Home Page</h1>
      <Link href="/about" className='text-xl text-blue-500 mt-8'>about page</Link>
    </div>
  )
}

export default HomePage