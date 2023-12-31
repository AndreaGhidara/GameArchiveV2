import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar, Search, Sidebar } from './components'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} h-screen`}>
        <div className='absolute top-0 right-0 p-2'>
          <Search />
        </div>
        <main className='sm:h-screen'>
          <header className=' sticky top-0 sm:hidden z-50'>
            <Navbar />
          </header>
          <div className='flex h-full'>
            <aside className='hidden sm:flex flex-col justify-between '>
              <Sidebar />
            </aside>
            <div className='grow max-h-full overflow-auto relative'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
