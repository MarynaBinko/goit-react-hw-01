
import Profile from "./components/Profile/Profile.jsx";
import userData from "./components/userData.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./components/friends.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
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
