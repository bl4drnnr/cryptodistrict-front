import Button from "./Button.component";
import styles from '@styles/Header.module.scss'

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Cryptodistrict</h1>
          <>
            <Button/>
            <Button/>
          </>
        </div>
      </div>
    </>
  )
}
