// import ProptTypes from "prop-types"

function FriendList({avatar, id, name, isOnline}){
    return(
<div>
  <img src={avatar} alt={id} width="48" />
  <p>{name}</p>
  <p>{isOnline}</p>
</div>
    )
}

export default FriendList