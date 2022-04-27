import React, { useContext } from 'react';
import { ACTIONS, GlobalContext } from '../context/GlobalContext';
import { Dialog } from '@blueprintjs/core';
import styles from '../styles/navbar/Navbar.module.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function Account() {
  const context = useContext(GlobalContext);
  

  console.log(context.state.isAdmin, 'testing');

  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      context.dispatch({ type: ACTIONS.SET_LOGGED_IN_FALSE });
      context.dispatch({ type: ACTIONS.IS_ADMIN_FALSE });
    });
  };

  return (
    <div>
      <Dialog
        title={`ACCOUNT ${context.state.isAdmin ? 'ADMIN' : ''}`}
        style={{ letterSpacing: 2 }}
        className={`bp4-dark`}
        isOpen={true}
        usePortal={true}
      >
        <div className={styles.dialogBtns}>
          <button
            type="submit"
            className={`${styles.logoutBtn}`}
            onClick={signUserOut}
          >
            Sign Out
          </button>
        </div>
      </Dialog>
    </div>
  );
}
