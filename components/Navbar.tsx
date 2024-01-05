import { NAVLINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import styles from './navbar.module.css'
import {sevillana} from '../font/font'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link className={styles.logo} href='/'><Image src='/logo.png' alt='logo' width={100} height={100}/></Link>
        <ul className={`${sevillana.className} ${styles.links}`} >
            {NAVLINKS.map((link)=>(
                <Link href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </ul>
        {/* <Button /> */}
        {/* the hamburger menu */}
        {/* <Image 
            src='menu.svg'
            alt='menu'
        /> */}
    </nav>
  )
}

export default Navbar