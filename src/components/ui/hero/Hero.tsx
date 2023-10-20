import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitleContainer}>
        <h1>Flash SALE <span>50% OFF</span></h1>
      </div>
    </div>
  )
}

export default Hero