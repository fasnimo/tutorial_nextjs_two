import './globals.css';
import NavBar from '@/components/NavBar';
import {Inter, Inconsolata, Roboto} from 'next/font/google';

const inter = Inter({subsets:['latin']});
// const inconsolata = Inconsolata({subsets:['latin']});
// const roboto = Roboto({subsets:['latin'], weight:['400']});

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