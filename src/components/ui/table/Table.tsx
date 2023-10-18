import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interface'
import styles from './Table.module.css'

const Table = () => {
  const {state:{cartItems}, dispatch} = useCartContext()

  const removeCart = (item: CartProduct) => {
    dispatch({type:'REMOVE_FROM_CART', payload: item})
  }
  const addCart = (item: CartProduct) => {
    dispatch({type:'ADD_TO_CART', payload: item})
  }

  return (
    <>  
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item)=>(
              <tr key={item.id}>
                <td>{item.name} <br /> <small>${item.price}</small></td>
                <td>
                  <button 
                    className={styles.modalButtonRemove}
                    onClick={()=>removeCart(item)}
                  >-</button>
                </td>
                <td>{item.quantity}</td>
                <td>
                  <button 
                    className={styles.modalButtonAdd}
                    onClick={()=>addCart(item)}>+</button>
                </td>
                <td>
                  ${item.price*item.quantity}
                </td>
              </tr>
            ))          
          }
        </tbody>
      </table>

      <div className={styles.modalTotalContainer}>
      <h3>Total: $</h3>
      </div>
    </>
  )
}

export default Table