import './globals.css'

export const metadata = {
  title: 'Hello World App',
  description: 'A simple Hello World application with React and Node.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
