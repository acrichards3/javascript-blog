import React from 'react';
import styles from '../styles/createPost/CreatePost.module.scss';

export default function CreatePost() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Post</h1>
      <div className={styles.createPost}>
        <button>Add Block</button>
      </div>
    </div>
  );
}
