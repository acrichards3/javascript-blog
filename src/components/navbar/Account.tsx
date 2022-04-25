import React, { useContext } from 'react';
import { ACTIONS, GlobalContext } from '../../context/GlobalContext';
import { Dialog } from '@blueprintjs/core';
import styles from '../../styles/navbar/Navbar.module.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Account() {
  const context = useContext(GlobalContext);
  console.log(auth, 'ruh roh');

  const signUserOut = () => {
    signOut(auth).then(() => {
        localStorage.clear();
        context.dispatch({ type: ACTIONS.IS_OPEN_FALSE });
        context.dispatch({ type: ACTIONS.SET_AUTH_FALSE });
        context.dispatch({ type: ACTIONS.SET_LOGGED_IN_FALSE });
    })
  }

  return (
    <div>
      <Dialog
        title="ACCOUNT"
        style={{ letterSpacing: 2 }}
        className={`bp4-dark`}
        isOpen={context.state.isOpen}
        onClose={() => context.dispatch({ type: ACTIONS.IS_OPEN_FALSE })}
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
