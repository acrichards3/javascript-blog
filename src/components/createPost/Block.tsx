import React from 'react';
import { TYPES } from './TYPES';
import styles from '../../styles/createPost/CreatePost.module.scss';

export default function Block() {
  const createnewBlock = (type: object) => {
    return;
  };

  return (
    <div className={styles.newBlock}>
      {TYPES.map((type: string) => {
        console.log('testing');
        return <button className={styles.newBlockBtn}>test</button>;
      })}
    </div>
  );
}
