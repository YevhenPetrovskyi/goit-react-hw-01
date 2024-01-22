import './FriendsList.css';

const FriendsListItem = ({ avatar, id, isOnline, name }) => {
  return (
    <li key={id} className="item">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={isOnline ? 'online' : 'offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

const FriendsList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map(({ avatar, id, isOnline, name }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
