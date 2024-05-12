// import propTypes from "prop-types"
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionDiv} >
      <table className={styles.transactionTable} >
        <thead>
          <tr>
            <th className={styles.transactionTitle}>Type</th>
            <th className={styles.transactionTitle}>Amount</th>
            <th className={styles.transactionTitle}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? styles.evenRow : ''}>
              <td className={styles.transactionItem}>{item.type}</td>
              <td className={styles.transactionItem}>{item.amount}</td>
              <td className={styles.transactionItem}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory
