import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ formData, onDeleteBtnClick }) {
  return formData.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}
      <button
        className={s.btn}
        type="button"
        onClick={() => onDeleteBtnClick(id)}
      >
        Delete
      </button>
    </li>
  ));
}

ContactItem.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactItem;
