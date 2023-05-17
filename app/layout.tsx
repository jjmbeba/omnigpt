import './globals.css'
import Navbar from "./(landing)/Navbar";



export const metadata = {
  title: 'Omnigpt',
  description: 'Website that provides seamless communication across multiple channels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#111826]  pt-[26px] md:pt-[47px] overflow-x-hidden scroll-smooth'>
      <Navbar/>
        {children}</body>
    </html>
  )
}
