import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Please leave feedback</h2>
      <div className={s.statBtns}>
        <button className={s.statBtn}>Good</button>
        <button className={s.statBtn}>Neutral</button>
        <button className={s.statBtn}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <ul className={s.statList}>
        <li className={s.statItem}>
          Good: <span className={s.count}>0</span>
        </li>
        <li className={s.statItem}>
          Neutral: <span className={s.count}>0</span>
        </li>
        <li className={s.statItem}>
          Bad: <span className={s.count}>0</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
