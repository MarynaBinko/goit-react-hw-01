import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline }) => {
    const className = clsx(
        styles.friendCard, 
        styles.friendsList
         );

  return (
    <div className={className}>
      <img className={styles.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <div>{isOnline ? <p className={styles.online}>Online</p> 
                     : <p className={styles.offline}>Offline</p>}</div>
      </div>)
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

export default FriendListItem


