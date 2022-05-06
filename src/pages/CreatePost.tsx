import React from 'react';
<<<<<<< HEAD
import Block from '../components/createPost/Block';
=======
>>>>>>> d0aafe36d6d5e8b72fdca60b5b8af0ab7a0c95d3
import styles from '../styles/createPost/CreatePost.module.scss';

export default function CreatePost() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <h1 className={styles.header}>Create New Post</h1>
      <div className={styles.blocks}>
        <Block />
      </div>
    </div>
  )
=======
      <h1 className={styles.title}>Create Post</h1>
      <div className={styles.createPost}>
        <div className={styles.input}>
          <input type="text" placeholder="Title..." className={styles.postTitle}/>
        </div>
        <button className={styles.publishBtn}>Publish</button>
      </div>
    </div>
  );
>>>>>>> d0aafe36d6d5e8b72fdca60b5b8af0ab7a0c95d3
}
