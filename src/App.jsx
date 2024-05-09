
import Profile from "./components/Profile";
import userData from "./components/userData.json";
import FriendList from "./components/FriendList";
import friends from "./components/friends.json"
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./components/transactions.json"

function App(){

  return(
    <>
<Profile
 name={userData.username}
 tag={userData.tag} 
 location={userData.location}
 image={userData.avatar}
 status={userData.stats}
/>
<FriendList friends={friends} 
/>
<TransactionHistory items={transactions}/>
    </>
  )
}

export default App
