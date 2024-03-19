import '@/styles/globals.scss'
import { Actor } from 'next/font/google'


const actor = Actor({subsets: ['latin'], weight: ['400']})

export default function Page({ children }: any) {

  return (<html lang="en" className={actor.className} suppressHydrationWarning={true}>
       <body>
        {children}
      </body>
      </html>
  )
}