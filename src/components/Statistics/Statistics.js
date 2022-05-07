import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={s.statList}>
      <li className={s.statItem}>
        Good: <span className={s.count}>{good}</span>
      </li>
      <li className={s.statItem}>
        Neutral: <span className={s.count}>{neutral}</span>
      </li>
      <li className={s.statItem}>
        Bad: <span className={s.count}>{bad}</span>
      </li>
      <li className={s.statItem}>
        Total: <span className={s.count}>{total}</span>
      </li>
      <li className={s.statItem}>
        Positive feedback: <span className={s.count}>{percentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
