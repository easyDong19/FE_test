import styles from '../../styles/forecast_list.module.css';
import { useState } from 'react';

const MENU_LIST = [
  {
    day: 'May 23',
    period: [
      { time: '03:00am', sky: 'clear', temp: '297.32C' },
      { time: '06:00am', sky: 'clear', temp: '297.32C' },
    ],
  },
  {
    day: 'May 24',
    period: [
      { time: '03:00am', sky: 'clear', temp: '297.32C' },
      { time: '06:00am', sky: 'clear', temp: '297.32C' },
    ],
  },
];

export default function Forecast_list(props) {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <nav className={styles.accordion_wrapper}>
      <header className={styles.title}>
        <h1>5-day Forecast</h1>
      </header>
      <ul>
        {MENU_LIST.map((item, idx) => {
          const active = idx === activeIndex ? 'active' : '';

          return (
            <ListItem
              day={item.day}
              idx={idx}
              key={idx}
              period={item.period}
              active={active}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </ul>
    </nav>
  );
}

const ListItem = ({
  day,
  idx,
  period,
  active,
  activeIndex,
  setActiveIndex,
}) => {
  const [clickedIdx, setClickedIdx] = useState();

  const handleClick = () => {
    if (activeIndex === idx) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(idx);
    }
    setClickedIdx(null);
  };

  return (
    <div
      className={
        active ? styles.isActive + ' ' + styles.listItem : styles.listItem
      }
      onClick={handleClick}
    >
      <div className={styles.list_title}>
        <div>{day}</div>
        {active ? <img src='/up.png' alt='' /> : <img src='/down.png' alt='' />}
      </div>

      <div className={styles.toggle_menu + ' ' + styles.isActive}>
        {period.map((item, idx) => {
          return (
            <div key={idx} className={styles.time_list}>
              <div className={styles.time}>
                <div>
                  <img src='/weather.png' alt='' />
                </div>
                <div>{item.time}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.sky}>{item.sky} sky</div>
                <div>
                  {item.temp} / {item.temp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
