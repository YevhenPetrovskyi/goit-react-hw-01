import './App.css';

import Profile from './Profile/Profile';
import FriendsList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
