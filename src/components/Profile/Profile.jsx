import propTypes from "prop-types"
import styles from "./Profile.module.css"

function Profile({image, name, tag, location, status: { followers, views, likes }}){
    return(
<div className={styles.card}>
<div className={styles.profile}>
<img className={styles.image} src={image} alt="User avatar"/>
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
</div>
<ul className={styles.list}>
    <li className={styles.listItem}>Followers<br />{followers}</li>
    <li className={styles.listItem}>Views<br />{views}</li>
    <li className={styles.listItem}>Likes<br />{likes}</li>
</ul>

</div>
    )
}

Profile.propTypes={
    name: propTypes.string,
    location: propTypes.string,
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number
}

export default Profile