import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
// import TransactionHistory from './TransactionHistory/TransactionHistory';
// import FriendList from './FriendList/FriendList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
// import transaction from './TransactionHistory/transactions.json';
// import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        padding: '50px'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
        
    </div>
  );
};
