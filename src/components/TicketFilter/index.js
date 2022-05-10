import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TicketItem from '../TicketItem';

import styles from './ticketFilter.module.scss';
export default function TicketFilter() {
  return (
    <div selectedTabClassName={styles['ticketFilter__item--selected']}>
      <div className={styles.ticketFilter}>
        <button className={styles.ticketFilter__item}>Самый дешевый</button>
        <button className={styles.ticketFilter__item}>Самый быстрый</button>
        <button className={styles.ticketFilter__item}>Оптимальный</button>
      </div>
    </div>
  );
}
