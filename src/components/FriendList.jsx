import ProptTypes from "prop-types"

function FriendList({friends}){
    return(
      friends.map((friend)=>{
        return(
        <div key="friend.id">
  <img src={friend.avatar} alt={friend.id} width="48" />
  <p>{friend.name}</p>
  <p>{friend.isOnline ? "Online" : "Offline"}</p>
</div>
      )})

    )
}


FriendList.PropTypes= {
  name: ProptTypes.string,
  isOnline: ProptTypes.bool

}
export default FriendList