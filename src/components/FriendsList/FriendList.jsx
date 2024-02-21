import styles from './FriendsList.module.css';

import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
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
