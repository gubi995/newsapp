import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ label, ...rest }) => {
  return (
    <button className={styles.button} type="button" {...rest}>
      {label}
    </button>
  );
};

export default Button;
