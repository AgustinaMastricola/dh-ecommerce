import { FC } from 'react'
import CloseButton from '../../../assets/close.svg'
import Table from '../table/Table'
import styles from './CartModal.module.css'
import {useNavigate} from 'react-router-dom'

interface Props{
  handleOpenModal: ()=> void
}

const CartModal: FC<Props> = ({handleOpenModal}) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/checkout')
    handleOpenModal()
  }

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleOpenModal}>
        <img src={CloseButton} alt="Close button" />
      </button>

      <Table/>

      <div className={styles.modalButtonContainer}>
        <button onClick={handleNavigate}>Checkout</button>
      </div>
    </div>
  )
}

export default CartModal