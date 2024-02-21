import styles from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={username}
          className={styles.avatar}
          width={240}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.firstItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.value}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.value}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
