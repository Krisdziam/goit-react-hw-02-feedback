import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <>
    <h2 className={styles.commonTitle}>TASK 1</h2>
      <div className={styles.profile}>
        <div className={styles.card}>
          <div className={styles.description}>
            <img src={avatar} alt="User avatar" className={styles.avatar} />
            <h2 className={styles.name}>{username}</h2>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
          </div>

          <ul className={styles.stats}>
            <li className={styles.userList}>
              <span className={styles.label}>Followers</span>
<br />
              <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.userList}>
              <span className={styles.label}>Views</span>
<br />
              <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.userList}>
              <span className={styles.label}>Likes</span>
<br />
              <span className={styles.quantity}>{stats.views}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
