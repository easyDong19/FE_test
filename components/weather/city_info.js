import styles from '../../styles/city_info.module.css';

const data = {
  day: 'May 23',
  time: '03:00am',
  city: 'Seoul, KR',
  popular: '10349312',
  temp: '292.98',
  sky: 'clear',
  feel: '291.91c',
  wind: '3.33m/s',
  wet: '34%',
};
export default function City_info(props) {
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.left_info}>
        <div>
          <img src='/Weather_icon.png' alt='' />
        </div>
        <div className={styles.today_info}>
          <div className={styles.calender}>
            {data.day} {data.time}
          </div>
          <div className={styles.location}>
            <span>{data.city}</span>(인구수 : {data.popular})
          </div>
        </div>
      </div>
      <div className={styles.right_info}>
        <div className={styles.temp_info}>{data.temp}C</div>
        <div className={styles.feel_temp}>
          Feels like {data.feel} {data.sky}sky 풍속 {data.wind} 습도 {data.wet}
        </div>
      </div>
    </div>
  );
}
