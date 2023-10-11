import styles from './Table.module.css'

const Table = () => {
  return (
    <>  
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <button className={styles.modalButtonRemove}>-</button>
            </td>
            <td>5</td>
            <td>
              <button className={styles.modalButtonAdd}>+</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.modalTotalContainer}>
      <h3>Total: $</h3>
      </div>
    </>
  )
}

export default Table