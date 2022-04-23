import React, { useContext } from 'react';
import { ACTIONS, GlobalContext } from '../../context/GlobalContext';
import { Dialog } from '@blueprintjs/core';
import { Image } from 'react-bootstrap';
import { auth, googleProvider, githubProvider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import styles from '../../styles/navbar/Navbar.module.scss';

export default function Account() {
  const context = useContext(GlobalContext);

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
      </Dialog>
    </div>
  );
}
