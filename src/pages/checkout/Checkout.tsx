import CardCredit from "../../components/ui/cardCredit/CardCredit"
import Table from "../../components/ui/table/Table"
import useCartContext from "../../hooks/useCartContext"
import styles from '../checkout/Checkout.module.css'
import { Toaster } from 'sonner'

const Checkout = () => {
  const {state:{cartItems}} = useCartContext()
  
  const cartIsEmpty = () => {
    return cartItems.length === 0
  }

  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1}/>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          {cartIsEmpty() ? '' : <CardCredit/>}
        </div>
      </div>
    </div>
  )
} 

export default Checkout