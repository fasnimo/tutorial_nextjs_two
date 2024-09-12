import './globals.css';
import NavBar from '@/components/NavBar';

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang='en'>
    <body>
      <NavBar/>
      <main className='max-w-3xl mx-auto py-10'>{children}</main>
    </body>
  </html>

  
}