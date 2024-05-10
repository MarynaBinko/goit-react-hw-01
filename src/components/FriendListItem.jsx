
import styles from "./FriendListItem.module.css"

const FriendListItem = ({friends}) => {
  return (
    <ul className={styles.friendsList}>
    {friends.map((friend) => (
      <li className={styles.friendCard} key={friend.id}>
        <img className={styles.friendImg} src={friend.avatar} alt="Friends avatar" width="48" />
        <p className={styles.friendName}>{friend.name}</p>
        <div className={styles.friendStatus}>
          {friend.isOnline ? <p className={styles.online}>Online</p> : <p className={styles.offline}>Offline</p>}
        </div>
      </li>
    ))}
  </ul>)
}

export default FriendListItem


