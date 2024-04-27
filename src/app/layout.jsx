import './global.css'

export const metadata = {
    title: 'Weather Forecast ',
    description: 'Web site for 24 hours forecast and 7 days forecast',
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