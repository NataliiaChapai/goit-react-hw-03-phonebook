import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>UPLOAD STATS</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            style={{ backgroundColor: getRandomHexColor() }}
            className={s.item}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{`${el.percentage}%`}</span>
          </li>
        ))}
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
