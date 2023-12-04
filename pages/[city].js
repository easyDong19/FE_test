import { useRouter } from 'next/router';
import styles from '../styles/city.module.css';
import Forecast_list from '../components/weather/forecast_list';
import City_info from '../components/weather/city_info';

export default function City() {
  const router = useRouter();
  const { city } = router.query;
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main_header}>
          <img src='/earth.png' className={styles.earth_img} alt='' />
          <h1 className={styles.main_title}>Weather Information for Seoul</h1>
        </div>
        <City_info></City_info>
        <Forecast_list></Forecast_list>
      </main>
    </>
  );
}
