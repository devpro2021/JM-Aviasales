import React from 'react';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/logo.svg" alt="" />
    </div>
  );
}
