import styles from './FriendsItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
 
  return (

   
        <li key={id} className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}>{isOnline}</span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
     
 
  );
};
FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendListItem;
