import React from 'react';
import styles from '../../styles/home/Home.module.scss';

export default function SecondaryBlog() {
  return (
    <div className={styles.secondaryRow}>
      <div className={styles.secondaryCard}>
        <h1 className={styles.dummyText}>Another post</h1>
      </div>
      <h1 className={styles.dummyText}>New Course</h1>
      <div className={styles.secondaryCard}></div>
    </div>
  );
}
