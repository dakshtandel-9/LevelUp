import './globals.css'

export const metadata = {
  title: 'LevelUp - Personal Growth Courses',
  description: 'Transform your career and life with expert-led courses on entrepreneurship, personal development, and professional growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}