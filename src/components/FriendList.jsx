import propTypes from "prop-types"
import styles from "./FriendList.module.css"

function FriendList({friends}){
    return(
      <ul className={styles.friendsDiv}>
      {friends.map((friend)=>{
        return(
        <li className={styles.friendCard} key={friend.id}>
  <img className={styles.friendImg} src={friend.avatar} alt="Friends avatar" width="48" />
  <p className={styles.friendName} >{friend.name}</p>
  <div className={styles.friendStatus}>{friend.isOnline 
  ? <p className={styles.online} >Online</p> 
  : <p className={styles.offline}>Offline</p> }</div>
</li>
      )})}
</ul>
    )
}



FriendList.propTypes= {
  name: propTypes.string,
  isOnline: propTypes.bool
}
export default FriendList