import Header from '../Header';
import TransferFilter from '../TransferFilter';
import TicketList from '../TicketList';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TransferFilter />
      <TicketList />
    </div>
  );
}

export default App;
