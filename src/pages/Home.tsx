import React from 'react';
import FeaturedBlog from '../components/thumbnails/FeaturedBlog';
import SecondaryBlog from '../components/thumbnails/SecondaryBlog';
import styles from '../styles/home/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <FeaturedBlog />
      <div className={styles.secondaryRow}>
        <SecondaryBlog />
      </div>
    </div>
  );
}
