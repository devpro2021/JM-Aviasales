import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateTicketsCounter } from '../../actions';

import styles from './button.module.scss';

const Button = function () {
  const dispatch = useDispatch();
  const ticketsCounter = useSelector((state) => state.ticketsCounter);

  const onClick = () => {
    const count = ticketsCounter + 5;
    dispatch(updateTicketsCounter(count));
  };

  return (
    <div className={styles['button-show-more__wrapper']}>
      <button type="button" onClick={onClick}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default Button;
