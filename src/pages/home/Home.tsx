import { useQuery } from 'react-query'
import { Toaster } from 'sonner'
import CardProduct from "../../components/ui/card/CardProduct"
import Hero from "../../components/ui/hero/Hero"
import { getProducts } from "../../service"
import styles from './Home.module.css'
import { useState } from 'react'

const Home = () => {
  const [page, setPage] = useState(1)
  const {data, isLoading, error} = useQuery(
    ['products', page], 
    () => getProducts(page),
    {keepPreviousData: true}
  )

  return (
    <>
      <Hero/>
      <Toaster richColors/>
      {isLoading && <p>Loading ...</p>}
      {error && <p>UPS! Something went wrong</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.id} product={product}/>  
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button className={styles.paginationButton} onClick={()=>setPage(page-1)} disabled={page === 1}> {'<'} </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button className={styles.paginationButton} onClick={()=>setPage(page + 1)}> {'>'} </button>
      </div>
    </>
  )
}

export default Home