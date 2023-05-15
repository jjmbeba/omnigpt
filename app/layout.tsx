import './globals.css'


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
      <body>{children}</body>
    </html>
  )
}
