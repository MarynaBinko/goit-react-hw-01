import PropTypes from "prop-types"
import styles from "./FriendList.module.css"

function FriendList({friends}){
    return(
      <ul className={styles.friendsDiv}>
      {friends.map((friend)=>{
        return(
        <li className={styles.friendCard} key={friend.id}>
  <img className={styles.friendImg} src={friend.avatar} alt="Friends avatar" width="48" />
  <p className={styles.friendName} >{friend.name}</p>
  <p className={styles.friendStatus}>{friend.isOnline 
  ?<p className={styles.online} >Online</p> 
  : <p className={styles.offline}>Offline</p> }</p>
</li>
      )})}
</ul>
    )
}



FriendList.PropTypes= {
  name: PropTypes.string,
  isOnline: PropTypes.bool

}
export default FriendList