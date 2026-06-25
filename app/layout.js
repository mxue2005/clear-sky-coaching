import './globals.css'

export const metadata = {
  title: 'Clear Sky Coaching | Clarity after the rain.',
  description:
    'Career & Life Coaching for Women in Tech. Navigate your professional path and find genuine, sustainable fulfillment — with Michelle Xue, GPCC™ certified coach.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500&family=Noto+Serif+SC:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
