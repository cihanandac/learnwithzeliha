'use client'
import { NAVLINKS } from '@/constants'
import Link from 'next/link'
import React, {useState} from 'react'
import Button from './Button'
import Image from 'next/image'
import styles from './navbar.module.css'
import {sevillana} from '../../font/font'
import Hamburger from './Hamburger'
import Menu from './Menu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
        <Link className={styles.logo} href='/'><Image src='/logo.png' alt='logo' width={100} height={100}/></Link>
        <ul className={`${sevillana.className} ${styles.links}`} >
            {NAVLINKS.map((link)=>(
                <Link href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </ul>
        <Hamburger onClick={toggleMenu} isOpen={isOpen} />
        <Menu isOpen={isOpen} onLinkClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar