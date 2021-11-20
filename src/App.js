import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import StatsList from './Components/StatsList/StatsList';
import user from '../src/sources/user.json';
import statsData from './sources/stats.json';
import friends from './sources/friends.json';
import FriendsList from './Components/FriendsList/FriendsList';
import transactions from './sources/transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <React.Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatsList title="Upload stats" data={statsData} />
      <StatsList data={statsData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </React.Fragment>
  );
}

export default App;
