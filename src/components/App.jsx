import './App.css';

import Profile from './Profile';
import FriendsList from './FriendList';
import TransactionHistory from './TransactionHistory';

import { username, tag, location, avatar, stats } from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
