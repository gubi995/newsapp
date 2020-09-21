import NewsCard from '../components/NewsCard';
import { useNewsListQuery } from '../hooks/useNewsQuery';
import styles from '../styles/QueryPage.module.css';

const Query = () => {
  const { data: newsList, isLoading } = useNewsListQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={styles.cards}>
      {newsList.map((news) => (
        <NewsCard news={news} key={news.id} />
      ))}
    </div>
  );
};

export default Query;
