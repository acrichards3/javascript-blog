import React, { useContext } from 'react';
import { ACTIONS, GlobalContext } from '../../context/GlobalContext';
import { Dialog } from '@blueprintjs/core';
import { Image } from 'react-bootstrap';
import { auth, googleProvider, githubProvider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import styles from '../../styles/navbar/Navbar.module.scss';

export default function Login() {
  const context = useContext(GlobalContext);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        context.dispatch({ type: ACTIONS.IS_OPEN_FALSE });
      context.dispatch({ type: ACTIONS.SET_AUTH_TRUE });
      context.dispatch({ type: ACTIONS.SET_LOGGED_IN_TRUE });
    });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
        context.dispatch({ type: ACTIONS.IS_OPEN_FALSE });
      context.dispatch({ type: ACTIONS.SET_AUTH_TRUE });
      context.dispatch({ type: ACTIONS.SET_LOGGED_IN_TRUE });
    });
  };

  return (
    <div>
      <Dialog
        title="LOGIN"
        style={{ letterSpacing: 2 }}
        className={`bp4-dark`}
        isOpen={context.state.isOpen}
        onClose={() => context.dispatch({ type: ACTIONS.IS_OPEN_FALSE })}
        usePortal={true}
      >
        <div className={styles.dialogBtns}>
          <button
            type="submit"
            className={styles.dialogGoogle}
            onClick={signInWithGoogle}
          >
            Sign in With Google
            <Image
              src="https://cdn.iconscout.com/icon/free/png-64/google-search-engine-find-anything-46241.png"
              className={styles.loginImg}
            />
          </button>
          <button
            type="submit"
            className={`${styles.dialogGithub}`}
            onClick={signInWithGithub}
          >
            Sign in With Github
            <Image
              src="https://cdn.iconscout.com/icon/free/png-64/github-163-761603.png"
              className={styles.loginImg}
            />
          </button>
        </div>
      </Dialog>
    </div>
  );
}
