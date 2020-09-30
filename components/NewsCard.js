import React from 'react';
import { classNames } from '../utils/classNames';
import styles from '../styles/NewsCard.module.css';

const NewsCard = ({ className, news: { title, description } }) => {
  return (
    <section className={classNames(styles.container, className)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default NewsCard;
