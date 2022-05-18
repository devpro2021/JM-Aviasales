import { format } from 'date-fns';
import React from 'react';

import styles from './ticketItem.module.scss';
export default function TicketItem({ ticket }) {
  const { price, carrier, segments } = ticket;
  const formatDuration = (min) => {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  };
  const timeOfDepart = (date, duration) => {
    const timeDepart = new Date(date);
    const timeOfArrive = new Date(timeDepart.getTime() + duration * 60000);
    return `${format(timeDepart, 'HH:mm')} - ${format(timeOfArrive, 'HH:mm')}`;
  };
  const textFormat = (stops) => {
    switch (stops.length) {
      case 1:
        return `${stops.length} пересадка`;
      case 2:
        return `${stops.length} пересадки`;
      case 3:
        return `${stops.length} пересадки`;
      default:
        return `${stops.length} пересадок`;
    }
  };
  const transfers = (stops) => {
    return stops.join(', ');
  };
  return (
    <div className={styles.ticketItem}>
      <div className={styles.ticketItem__price}>{price} P </div>
      <img src={`//pics.avs.io/99/36/${carrier}@2x.png`} className={styles.ticketItem__logo} alt="" />
      <div className={styles['ticketItem__flight-list']}>
        <div className={styles.ticketItem__flight}>
          <div>
            <span>
              {segments[0].origin} – {segments[0].destination}
            </span>
            {timeOfDepart(segments[0].date, segments[0].duration)}
          </div>
          <div>
            <span>В пути</span>
            {formatDuration(segments[0].duration)}
          </div>
          <div>
            <span>{textFormat(segments[0].stops)}</span>
            {transfers(segments[0].stops)}
          </div>
        </div>
        <div className={styles.ticketItem__flight}>
          <div>
            <span>
              {segments[1].origin} – {segments[1].destination}
            </span>
            {timeOfDepart(segments[1].date, segments[1].duration)}
          </div>
          <div>
            <span>В пути</span>
            {formatDuration(segments[1].duration)}
          </div>
          <div>
            <span>{textFormat(segments[1].stops)}</span>
            {transfers(segments[1].stops)}
          </div>
        </div>
      </div>
    </div>
  );
}
