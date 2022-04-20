import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Dialog } from '@blueprintjs/core';
import styles from '../../styles/navbar/Navbar.module.scss';
import {
  ACTIONS,
  GlobalContext,
  initialState,
} from '../../context/GlobalContext';

export default function Navbar() {
  const context = useContext(GlobalContext);

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
      <div className={styles.navEnd}>
        <button className={styles.loginBtn}>Sign In</button>
        <button
          className={styles.loginBtnColor}
          onClick={() => context.dispatch({ type: ACTIONS.IS_OPEN_TRUE })}
        >
          Sign In
        </button>{' '}
        <div className="bp4-dialog-container">
          <Dialog
            title="Login"
            isOpen={initialState.isOpen}
            canOutsideClickClose={true}
            onClose={() => context.dispatch({ type: ACTIONS.IS_OPEN_FALSE })}
            usePortal={true}
          >
            Testing
          </Dialog>
        </div>
      </div>
    </div>
  );
}
