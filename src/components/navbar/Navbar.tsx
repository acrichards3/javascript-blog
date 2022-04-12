import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import MobileNav from './MobileNav';
import styles from '../../styles/navbar/Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navStart}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className={styles.logo}>Logo Here</h1>
        </Link>
          <Icon onClick={toggleOpen} icon="menu" color="#99a5b9" className={styles.mobileBtn} />
          <div className={isOpen ? styles.mobileOpen : styles.mobileClosed}>
            <MobileNav />
          </div>
      </div>
      <div className={styles.navCenter}>
        <div className={styles.homeIcon}>
          <Link to="/" className={styles.homeIcon}>
            <Icon icon="home" /> Home{' '}
          </Link>
        </div>
        <div className={styles.blogIcon}>
          <Link to="/blog" className={styles.blogIcon}>
            <Icon icon="manually-entered-data" /> Blog{' '}
          </Link>
        </div>
        <div className={styles.coursesIcon}>
          <Link to="/courses" className={styles.coursesIcon}>
            <Icon icon="learning" /> Courses{' '}
          </Link>
        </div>
      </div>
      <div className={styles.navEnd}>
        <button className={styles.loginBtn}>Sign In</button>
        <button className={styles.loginBtnColor}>Sign In</button>{' '}
      </div>
    </div>
  );
}
