import React from 'react';
import styles from '../styles/static/ComingSoon.module.scss';

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coming Soon</h1>
      <p className={styles.text}>Hang tight! This feature is still under development!</p>
    </div>
  );
}
