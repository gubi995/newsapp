import React from 'react';

import styles from '../styles/Input.module.css';

const Input = ({ label, ...rest }) => {
  return (
    <label className={styles.label}>
      {label}
      <input className={styles.input} type="text" {...rest} />
    </label>
  );
};

export default Input;
