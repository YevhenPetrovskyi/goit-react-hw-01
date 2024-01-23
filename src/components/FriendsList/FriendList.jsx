import './FriendsList.css';

import FriendsListItem from '../FriendsListItem/FriendsListItem';

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
