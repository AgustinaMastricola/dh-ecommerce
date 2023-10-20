import { useNavigate } from 'react-router-dom'
import styles from './dashboard.module.css'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [product, setProduct] = useState({
    amiiboSeries: '',
		character: '',
		gameSeries: '',
		head: '',
		image: '',
		name: '',
		releaseDate: '',
		tail: '',
		type: '',
		price: 0
  })

  const navigate = useNavigate()

  useEffect(() => {
    const userLogin = localStorage.getItem('userLogin')
    if (!userLogin) {
      navigate('/login')
    }
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem('userLogin')
    navigate('/login')
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(product)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoutContainer}>
        <h1>Create new Product</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formControlLogin}>
            <label htmlFor="amiiboSeries">Amiibo Series</label>
            <input
              type="text"
              id='amiiboSeries'
              name='amiiboSeries'
              value={product.amiiboSeries}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="character">character</label>
            <input
              type="text"
              id='character'
              name='character'
              value={product.character}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="gameSeries">gameSeries</label>
            <input
              type="text"
              id='gameSeries'
              name='gameSeries'
              value={product.gameSeries}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="head">head</label>
            <input
              type="text"
              id='head'
              name='head'
              value={product.head}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="image">Image</label>
            <input
              type="url"
              id='image'
              name='image'
              value={product.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              name='name'
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="releaseDate">Release</label>
            <input
              type="date"
              id='releaseDate'
              name='releaseDate'
              value={product.releaseDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="tail">Tail</label>
            <input
              type="text"
              id='tail'
              name='tail'
              value={product.tail}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id='type'
              name='type'
              value={product.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formControlLogin}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id='price'
              name='price'
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.formControlLogin}>
          <button type='submit'>Add product</button>
        </div>
      </form>
    </div>
  )
}

export default Dashboard