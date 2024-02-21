import styles from './FriendsList.module.css';

const FriendsListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendsListItem;
