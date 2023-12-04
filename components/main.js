import styles from '../styles/main.module.css';
import Link from 'next/link';

export default function Main() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.main_title}>
          Welcome to <br /> <span>Weather App!</span>
        </h1>
        <p className={styles.sub_title}>
          Choose a city from the list below to check the weather.
        </p>
      </div>

      <div className={styles.btn_list_wrapper}>
        <ul className={styles.btn_list}>
          <Link href='/Seoul'>
            <li className={styles.btn}>Seoul</li>
          </Link>
          <Link href='/Tokyo'>
            <li className={styles.btn}>Tokyo</li>
          </Link>
          <Link href='/Paris'>
            <li className={styles.btn}>Paris</li>
          </Link>
          <Link href='/London'>
            <li className={styles.btn}>London</li>
          </Link>
        </ul>
      </div>

      <div className={styles.earth_img}>
        <img src='/earth.png' alt='earth' />
      </div>
    </header>
  );
}
