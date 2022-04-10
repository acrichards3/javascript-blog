import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core'
import styles from '../../styles/navbar/Navbar.module.scss';


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navStart}>
        <h1 className={styles.logo}>Logo Here</h1>
      </div>
      <div className={styles.navCenter}>
        <Link to="/" className={styles.navLink}>
          <Icon icon="home" color="#99A5B9" /> Home{' '}
        </Link>
        <Link to="/blog" className={styles.navLink}>
          <Icon icon="manually-entered-data" color="#99A5B9" /> Blog{' '}
        </Link>
        <Link to="/courses" className={styles.navLink}>
          <Icon icon="learning" color="#99A5B9" /> Courses{' '}
        </Link>
      </div>
      <div className={styles.navEnd}>
        <button className={styles.loginBtn}>Sign In</button>
      </div>
    </div>
  );
}
