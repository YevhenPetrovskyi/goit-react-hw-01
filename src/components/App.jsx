import './App.css';

import Profile from './Profile';
import FriendsList from './FriendList';
import TransactionHistory from './TransactionHistory';

import { username, tag, location, avatar, stats } from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

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
