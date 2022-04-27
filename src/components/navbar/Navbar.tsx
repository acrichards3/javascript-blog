import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { GlobalContext } from '../../context/GlobalContext';
import Login from './Login';
import styles from '../../styles/navbar/Navbar.module.scss';

export default function Navbar() {
  const context = useContext(GlobalContext);
  console.log(context.state.isOpen, context.state.loggedIn);

  const loginBtn = () => {
    if (context.state.loggedIn) {
      return (
        <Link to="/" className={styles.accountBtn} style={{textDecoration: 'none'}}>
          Account
        </Link>
      );
    }
    if (context.state.loggedIn === false) {
      return <Login />;
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navStart}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className={styles.logo}>Logo</h1>
        </Link>
      </div>
      <div className={styles.navCenter}>
        {/* MOBILE VIEW */}
        <Link to="/" className={styles.homeIconMobile}>
          <Icon icon="home" size={25} color="#99a5b9" />
        </Link>
        <Link to="/blog" className={styles.blogIconMobile}>
          <Icon icon="manually-entered-data" size={25} color="#99a5b9" />
        </Link>
        <Link to="/courses" className={styles.coursesIconMobile}>
          <Icon icon="learning" size={25} color="#99a5b9" />
        </Link>
        {/* DESKTOP VIEW */}
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
      <div className={styles.navEnd}>{loginBtn()}</div>
    </div>
  );
}
