import styles from './Friends.module.css';
import FriendListItem from './FriendsItem'

const FriendList = ({friends}) => {
  return (
    <>
       <h2 className={styles.commonTitle}>TASK 3</h2>
       <ul className={styles.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        id={id}
                    />
                ))}
            </ul>
    </>
  );
};

export default FriendList;
