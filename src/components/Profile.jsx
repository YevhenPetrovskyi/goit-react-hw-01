import './Profile.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={image} alt="User avatar" className="avatar" width={240} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="first-item">
          <span className="label">Followers</span>
          <span className="value">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="value">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
