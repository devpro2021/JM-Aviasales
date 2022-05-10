import React from 'react';

import TicketFilter from '../TicketFilter';
import TicketItem from '../TicketItem';

import styles from './ticketList.module.scss';

export default function TicketList() {
  return (
    <div className={styles.ticketsList}>
      <TicketFilter />
      <TicketItem />
    </div>
  );
}
