import type { Metadata } from 'next'
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hanken',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Milton Sylvio da Silva Junior | Fullstack',
  description:
    'Software Engineer Fullstack. React, Next.js, TypeScript, Design Systems e Agentic Development.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='pt-BR'
      className={`${hanken.variable} ${jetbrains.variable} dark scroll-smooth antialiased`}
    >
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='min-h-full bg-background font-mono text-body-md text-on-surface'>
        {children}
      </body>
    </html>
  )
}
