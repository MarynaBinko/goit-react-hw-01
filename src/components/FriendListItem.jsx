import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline }) => {

    const className = clsx(isOnline ? styles.online : styles.offline);

  return (
    <div className={styles.friendCard}>
      <img className={styles.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <div>{isOnline ? <p className={className}>Online</p> 
                     : <p className={className}>Offline</p>}</div>
      </div>)
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

export default FriendListItem


