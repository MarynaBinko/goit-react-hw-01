function Profile(props){
    return(
<div>
<div>
    <img src={props.image} alt="User avatar"/>
    <p>{props.name}</p>
    <p>{props.tag}</p>
    <p>{props.location}</p>
</div>
<ul>
    <li>Followers
        {props.stats.followers}
    </li>
    <li>Views
        {props.stats.views}
    </li>
    <li>Likes
        {props.stats.views}
    </li>
</ul>

</div>
    )
}

export default Profile