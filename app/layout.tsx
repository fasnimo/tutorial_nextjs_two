import './globals.css';
// global css is imported into this layout to use
import NavBar from '@/components/NavBar';
import {Inter, Inconsolata, Roboto} from 'next/font/google';

const inter = Inter({subsets:['latin']});
//These are other fonts and ways to include fonts
// const inconsolata = Inconsolata({subsets:['latin']});
// const roboto = Roboto({subsets:['latin'], weight:['400']});

// RootLayer Layout needs to have argument childern like below
// tailwind allows for className css
// NavBar has to bee external to avoid being in the router
export default function RootLayout({children}:{children:React.ReactNode}){
  return ( 
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <main className='max-w-3xl mx-auto py-10'>{children}</main>
      </body>
    </html>
  )
  
}