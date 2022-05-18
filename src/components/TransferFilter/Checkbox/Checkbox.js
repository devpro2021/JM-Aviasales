/* eslint-disable prettier/prettier */
import classNames from 'classnames';
import React from 'react';

import styles from './checkbox.module.scss';
export default function Checkbox({ text, onClick, isChecked }) {
  let checkboxStyle = classNames({
    [styles.checkbox]: true,
    [styles.checked]: isChecked,
  });
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onClick} />
      <span className={checkboxStyle} aria-hidden="true"></span>
      {text}
    </label>
  );
}
