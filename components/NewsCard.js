import React from 'react';

import styles from '../styles/NewsCard.module.css';

const NewsCard = ({ news: { title, description } }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default NewsCard;
