import { useEffect, useState } from "react"
import Hero from "../../components/ui/hero/Hero"
import styles from './Home.module.css'
import CardProduct from "../../components/ui/card/CardProduct"

const Home = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Hero/>
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product}/>  
        ))}
      </div>
    </>
  )
}

export default Home