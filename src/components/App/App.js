import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

// eslint-disable-next-line
import 'antd/dist/antd.css';
import Header from '../Header';
import TransferFilter from '../TransferFilter';
import TicketList from '../TicketList';
import { getKey, getTickets } from '../../services/apiServices';
import { updateSearchId, updateTickets, completedLoading, throwError } from '../../actions';
import { ticketsId } from '../../helpers/ticketsId';

import styles from './app.module.scss';
function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isStop);
  const [percentCount, setPercentCount] = useState(0);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { searchId } = await getKey();
        dispatch(updateSearchId(searchId));

        const getTicketsFetch = setInterval(async () => {
          const { tickets, stop } = await getTickets(searchId);
          const ticketsWithId = ticketsId(tickets);
          dispatch(updateTickets(ticketsWithId));
          setPercentCount((percentCount) => percentCount + 6);
          if (stop) {
            dispatch(completedLoading());
            clearInterval(getTicketsFetch);
          }
        }, 500);
      };
      fetchData();
    } catch (error) {
      dispatch(throwError(error));
    }

    return () => dispatch(completedLoading());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Header />
      {!loading ? <Progress className={styles['ant-progress']} percent={percentCount} showInfo={false} /> : null}

      <TransferFilter />
      <TicketList />
    </div>
  );
}

export default App;
