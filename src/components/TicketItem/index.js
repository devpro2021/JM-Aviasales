import React from 'react';

import styles from './ticketItem.module.scss';
export default function TicketItem() {
  return (
    <div className={styles.ticketItem}>
      <div className={styles.ticketItem__price}>13 400 Р </div>
      <img src="//pics.avs.io/99/36/S7@2x.png" className={styles.ticketItem__logo} alt="" />
      <div className={styles['ticketItem__flight-list']}>
        <div className={styles.ticketItem__flight}>
          <div>
            <span>MOW – HKT</span>10:45 – 08:00
          </div>
          <div>
            <span>В пути</span>21ч 15м
          </div>
          <div>
            <span>2 пересадки</span>HKG, JNB
          </div>
        </div>
        <div className={styles.ticketItem__flight}>
          <div>
            <span>MOW – HKT</span>10:45 – 08:00
          </div>
          <div>
            <span>В пути</span>21ч 15м
          </div>
          <div>
            <span>2 пересадки</span>HKG, JNB
          </div>
        </div>
      </div>
    </div>
  );
}
