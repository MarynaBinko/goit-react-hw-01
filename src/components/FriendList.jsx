import propTypes from "prop-types"
import styles from "./FriendList.module.css"
import FriendListItem from "./FriendListItem.jsx"

function FriendList({friends}){
    return(
      <ul className={styles.friendsDiv}>
        <li>
          <FriendListItem  friends={friends} /> 
        </li>
     </ul>
    )
}



FriendList.propTypes= {
  name: propTypes.string,
  isOnline: propTypes.bool
}
export default FriendList