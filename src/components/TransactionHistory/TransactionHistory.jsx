import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <>
     <h2 className={styles.commonTitle}>TASK 4</h2>
      <table className={styles.transactionHistory}>
        <thead className={styles.transactionHead}>
          <tr>
            <th className={styles.tableHead}>Type</th>
            <th className={styles.tableHead}>Amount</th>
            <th className={styles.tableHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.transactionTable}>
              <td className={styles.item}>{type}</td>
              <td className={styles.item}>{amount}</td>
              <td className={styles.item}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
