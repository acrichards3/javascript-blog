import React, { useContext, useEffect } from 'react';
import { ACTIONS, GlobalContext, ADMINS } from '../../context/GlobalContext';
import { Dialog } from '@blueprintjs/core';
import styles from '../../styles/navbar/Navbar.module.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Account() {
  const context = useContext(GlobalContext);
  const user = auth.currentUser;
  const UID = user?.uid ?? '';

  console.log(UID, 'ruh roh');
  console.log(context.state.isAdmin, 'testing');

  const checkAdmin = () => {
    for (let i = 0; i < ADMINS.length; i++) {
      if (ADMINS[i].uid === UID) {
        context.dispatch({ type: ACTIONS.IS_ADMIN_TRUE });
      }
    }
  };

  useEffect(() => {
    checkAdmin();
    // eslint-disable-next-line
  }, [user])

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      context.dispatch({ type: ACTIONS.IS_OPEN_FALSE });
      context.dispatch({ type: ACTIONS.SET_AUTH_FALSE });
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
