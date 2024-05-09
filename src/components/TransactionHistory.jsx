// import PropTypes from "prop-types"
// import styles from "./FriendList.module.css"

const TransactionHistory = (items) => {
  return (
    <div>{
        items.map((item)=>{
            return(
            <table key={item.id}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
          
            <tbody>
              <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
             </tbody>
          </table>
          
        )})
                
        }      
    </div>
  )
}

export default TransactionHistory
