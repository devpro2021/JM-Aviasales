import React from 'react';

import Checkbox from './Checkbox';
import styles from './transferFilter.module.scss';

export default function TransferFilter() {
  const filterText = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  let maxID = 0;
  return (
    <div className={styles.transferFilter}>
      <h2 className={styles.transferFilter__header}>Количество пересадок</h2>
      {filterText.map((text) => {
        return <Checkbox key={(maxID += 1)} text={text} />;
      })}
    </div>
  );
}
