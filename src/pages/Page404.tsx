import React from 'react';
import styles from '../styles/static/ComingSoon.module.scss';

export default function Page404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Page Not Found</h1>
      <p className={styles.text}>
        Sorry, but the page you are looking for doesn't exist!
      </p>
    </div>
  );
}
