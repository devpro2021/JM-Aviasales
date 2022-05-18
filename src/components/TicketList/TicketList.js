import { Spin, Alert } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button';
import TabFilter from '../TabFilter';
import TicketItem from '../TicketItem';

import styles from './ticketList.module.scss';

export default function TicketList() {
  const filters = useSelector((state) => state.filters);
  const tickets = useSelector((state) => state.tickets);
  const tabFilters = useSelector((state) => state.tabFilters);
  const ticketsCounter = useSelector((state) => state.ticketsCounter);
  const filtersArray = filters
    .map((filter) => (filter.isChecked ? Number(filter.code) : null))
    .filter((el) => el !== null);
  const newTickets = tickets.map((t) => {
    const sumMin = t.segments[0].duration + t.segments[1].duration;
    t.sumMin = sumMin;
    const sumMinAndPrice = t.sumMin + t.price;
    t.sumMinAndPrice = sumMinAndPrice;
    return t;
  });

  const ActiveTabName = tabFilters.find((el) => el.isActive).name;

  const filteredArr = newTickets.filter((item) => {
    const transferTo = item.segments[0].stops.length;
    const transferFrom = item.segments[1].stops.length;
    if (filtersArray.includes(transferTo) && filtersArray.includes(transferFrom)) {
      return item;
    }
  });

  const sortFn = (arr, sortName) => {
    switch (sortName) {
      case 'cheapest':
        arr.sort((a, b) => a.price - b.price);
        break;
      case 'faster':
        arr.sort((a, b) => a.sumMin - b.sumMin);
        break;
      case 'optimal':
        arr.sort((a, b) => a.sumMinAndPrice - b.sumMinAndPrice);
        break;
      default:
        return [];
    }
    return arr;
  };
  const ticketList = sortFn(filteredArr, ActiveTabName).map((ticket, i) => {
    if (i < ticketsCounter) {
      return <TicketItem key={i} ticket={ticket} />;
    }
  });
  return (
    <div className={styles.ticketsList}>
      <TabFilter />
      {tickets.length === 0 ? (
        <Spin size="large" className={styles['ant-spin-spinning']} />
      ) : (
        <>
          {filtersArray.length === 0 ? (
            <Alert
              className={styles['ant-alert']}
              message="Рейсов, подходящих под заданные фильтры, не найдено. Выберите правильно фильтры"
              type="warning"
            />
          ) : (
            ticketList
          )}
          <Button />
        </>
      )}
    </div>
  );
}
