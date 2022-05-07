import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.statBtns}>
      <button
        type="button"
        name={options[0]}
        className={s.statBtn}
        onClick={onLeaveFeedback}
      >
        {options[0]}
      </button>
      <button
        type="button"
        name={options[1]}
        className={s.statBtn}
        onClick={onLeaveFeedback}
      >
        {options[1]}
      </button>
      <button
        type="button"
        name={options[2]}
        className={s.statBtn}
        onClick={onLeaveFeedback}
      >
        {options[2]}
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
