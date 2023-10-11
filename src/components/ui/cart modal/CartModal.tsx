import Table from '../table/Table'
import styles from './CartModal.module.css'
import CloseButton from '../../../assets/close.svg'

const CartModal = ({handleOpenModal}) => {
  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleOpenModal}>
        <img src={CloseButton} alt="Close button" />
      </button>

      <Table/>

      <div className={styles.modalButtonContainer}>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default CartModal