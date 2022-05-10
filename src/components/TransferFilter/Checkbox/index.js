/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import styles from './checkbox.module.scss';
export default function Checkbox({ text }) {
  const [isChecked, setIsChecked] = useState(false);
  let checkboxStyle = styles.checkbox;
  if (isChecked) {
    // eslint-disable-next-line no-undef
    checkboxStyle += ` ${styles.checked}`;
  }
  return (
    <label>
      <input type="checkbox" data-filter="all" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <span className={checkboxStyle} aria-hidden="true"></span>
      {text}
    </label>
  );
}
