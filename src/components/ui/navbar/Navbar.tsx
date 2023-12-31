import logoCarrito from '../../../assets/cart.svg'
import logoApp from '../../../assets/logo.svg'
import useCartContext from '../../../hooks/useCartContext'
import CartModal from '../cart modal/CartModal'
import styles from './Navbar.module.css'
import { useState } from "react"
import {useNavigate, useLocation} from 'react-router-dom'

const Navbar = () => {
  const [openCartModal, setOpenCartModal] = useState(false)
  const {state:{cartItems}} = useCartContext()
  const navigate = useNavigate()
  const location = useLocation()

  const handleOpenModal = () => {
    setOpenCartModal(!openCartModal)
  }
  const handleNavigate = () => {
    navigate('/')
  }
  const cartIsEmpty = () => {
    return cartItems.length === 0
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail} onClick={handleNavigate}>
        <img src={logoApp} alt="logo aplicacion" width={50} height={50}/>
        <div>
          <h2>Mario Bros Store</h2>
        </div>
      </div>

    {location.pathname !== '/checkout' && (
      <>
        <div className={styles.navbarCartContainer}>
          <p className={styles.navbarTextAmount}>
            {cartIsEmpty() ? `` : cartItems.length}
          </p>
          <img src={logoCarrito} alt="icono carrito" onClick={handleOpenModal} />
        </div>
        {openCartModal && (
          <CartModal handleOpenModal={handleOpenModal}/>
        )}
      </>
    )}
    </div>
  )
}

export default Navbar