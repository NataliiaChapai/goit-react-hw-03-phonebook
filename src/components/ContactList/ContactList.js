import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';

function ContactList({ formData, onDeleteBtnClick }) {
  return (
    <ul className={s.list}>
      <ContactItem formData={formData} onDeleteBtnClick={onDeleteBtnClick} />
    </ul>
  );
}

ContactList.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
