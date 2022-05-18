import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../actions';

import Checkbox from './Checkbox';
import styles from './transferFilter.module.scss';

export default function TransferFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  let countSelected = 0;
  const filterList = filters.map(({ title, value, isChecked }) => {
    if (isChecked) {
      countSelected += 1;
    }
    const switchFilter = (e) => {
      const newFilterList = [...filters];
      if (title === 'all' && isChecked === false) {
        newFilterList.map((el) => {
          el.isChecked = true;
          return el;
        });
      }
      if (title === 'all' && isChecked === true) {
        newFilterList.map((el) => {
          el.isChecked = false;
          return el;
        });
      }
      if (title !== 'all') {
        newFilterList.map((el) => {
          if (el.title === title) {
            el.isChecked = e.target.checked;
            if (!e.target.checked) {
              countSelected -= 1;
            }
          }
          if (el.title === 'all') {
            el.isChecked = false;
          }
          return el;
        });
      }
      if (countSelected === 3 && title !== 'all') {
        newFilterList.map((el) => {
          el.isChecked = true;
          return el;
        });
      }
      dispatch(changeFilter(newFilterList));
    };
    return <Checkbox key={title} text={value} onClick={switchFilter} isChecked={isChecked} />;
  });
  return (
    <div className={styles.transferFilter}>
      <h2 className={styles.transferFilter__header}>Количество пересадок</h2>
      {filterList}
    </div>
  );
}
