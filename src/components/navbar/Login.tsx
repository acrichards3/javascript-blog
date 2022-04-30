import React, { useContext } from 'react';
import { ACTIONS, GlobalContext } from '../../context/GlobalContext';
import { Image } from 'react-bootstrap';
import { auth, googleProvider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import styles from '../../styles/navbar/Navbar.module.scss';

export default function Login() {
  const context = useContext(GlobalContext);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        context.dispatch({ type: ACTIONS.SET_LOGGED_IN_TRUE });
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <div>
      <div className={styles.dialogBtns}>
        <button
          type="submit"
          className={styles.googleBtn}
          onClick={signInWithGoogle}
        >
          Sign in With Google
          <Image
            src="https://cdn.iconscout.com/icon/free/png-64/google-search-engine-find-anything-46241.png"
            className={styles.loginImg}
          />
        </button>
      </div>
    </div>
  );
}
