import React from 'react';
import styles from '../../styles/sidebar/Sidebar.module.scss';

export default function About() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <img
          className={styles.me}
          alt="me"
          src={require('../../images/me.jpg')}
        />
        <h1 className={styles.header}>ABOUT ME</h1>
        <p className={styles.text}>
          Hi, I'm Alex! I am a full stack web developer whos passion is to teach
          the world how to code.
        </p>
        <h1 className={styles.header}>LEGAL</h1>
        <p className={styles.text}>
          This site is owned and operated by ACR Blogs LLC. javascript-blog is a
          participant in the Amazon Services LLC Associates Program, an
          affiliate advertising program designed to provide a means for sites to
          earn advertising fees by advertising and linking to Amazon.com. This
          site also participates in other affiliate programs and is compensated
          for referring traffic and business to these companies.
        </p>
      </div>
    </div>
  );
}
