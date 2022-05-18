import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { updateTabFilter } from '../../actions';

import styles from './tabFilter.module.scss';
export default function TabFilter() {
  const dispatch = useDispatch();
  const tabFilters = useSelector((state) => state.tabFilters);
  const buttons = tabFilters.map(({ name, value, isActive }) => {
    const buttonClass = classNames({
      [styles.tabFilter__item]: true,
      [styles.tabFilter__item_active]: isActive,
    });
    const onClickHandler = () => {
      const newTabFilters = [...tabFilters].map((el) => {
        if (el.name === name) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
        return el;
      });
      dispatch(updateTabFilter(newTabFilters));
    };
    return (
      <div key={name} className={buttonClass} onClick={() => onClickHandler()} tabIndex={0} role="button">
        {value}
      </div>
    );
  });
  return <div className={styles.tabFilter}>{buttons}</div>;
}
