import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import styles from './mobilemenu.module.css';

const Mobilemenu = () => {
  return (
    <Menu>
      <a className={`styles.menu-item`} href="/">
        Home
      </a>
      <a className={`styles.menu-item`} href="/salads">
        Salads
      </a>
      <a className={`styles.menu-item`} href="/pizzas">
        Pizzas
      </a>
      <a className={`styles.menu-item`} href="/desserts">
        Desserts
      </a>
    </Menu>
  )
}

export default Mobilemenu