import logoCarrito from '../../../assets/cart.svg'
import logoApp from '../../../assets/logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={logoApp} alt="logo aplicacion" width={50} height={50}/>
        <div>
          <h2>Ecommerce AM</h2>
        </div>
      </div>

      <div className={styles.navbarCartContainer}>
        <p className={styles.navbarTextAmount}>2</p>
        <img src={logoCarrito} alt="icono carrito" />
      </div>
    </div>
  )
}

export default Navbar