import './global.css'

export const metadata = {
    title: 'React App',
    description: 'Web site created with Next.js.',
  }
   
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className='h-screen '>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }