import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ formData, onDeleteBtnClick }) {
  return (
    <ul className={s.list}>
      {formData.map(({ id, name, number }) => (
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
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
