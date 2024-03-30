import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        Welcome to 2nd Assignment link navigation
          <br/>
          <Link href="/name">Go to name page</Link>
    </div>
  )
}
