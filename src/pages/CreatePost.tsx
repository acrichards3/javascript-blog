import React from 'react';
import styles from '../styles/createPost/CreatePost.module.scss';

export default function CreatePost() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Post</h1>
      <div className={styles.createPost}>
        <div className={styles.input}>
          <input type="text" placeholder="Title..." className={styles.postTitle}/>
        </div>
        <button className={styles.publishBtn}>Publish</button>
      </div>
    </div>
  );
}
