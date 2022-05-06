import React from 'react';
import Block from '../components/createPost/Block';
import styles from '../styles/createPost/CreatePost.module.scss';

export default function CreatePost() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create New Post</h1>
      <div className={styles.blocks}>
        <Block />
      </div>
    </div>
  )
}
