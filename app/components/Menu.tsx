import React from "react";
import styles from "./Menu.module.css"; // Adjust the path as necessary
import { NAVLINKS } from '@/constants'
import Link from 'next/link'
import {sevillana} from '../../font/font'
import Image from "next/image";

interface MenuProps {
  isOpen: boolean;
  onLinkClick: () => void; // Function to call when a link is clicked
}

const Menu: React.FC<MenuProps> = ({ isOpen, onLinkClick }) => {
  return (
    <div className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu}>
        <Link onClick={onLinkClick} className={styles.logo} href='/'><Image src='/logo.png' alt='logo' width={100} height={100}/></Link>
        <ul className={`${sevillana.className} ${styles.mobilemenulinks}`} >
            {NAVLINKS.map((link)=>(
                <Link  onClick={onLinkClick} href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </ul>
    </div>
  );
};

export default Menu;
