import Table from "../../components/ui/table/Table"
import styles from '../checkout/Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          {/*Frormulario card*/}
        </div>
      </div>
    </div>
  )
}

export default Checkout