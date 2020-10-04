import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNewsList } from '../hooks/useNewsQuery';
import { useNewSubscription } from '../hooks/useNewSubscription';
import styles from '../styles/QueryPage.module.css';

const Subscription = () => {
  const [newsList, setNewsList] = useState(null);

  useEffect(() => {
    let mounted = true;

    const getNewsList = async () => {
      const { items } = await fetchNewsList();

      mounted && setNewsList(items);
    };

    getNewsList();

    return () => {
      mounted = false;
    };
  }, [fetchNewsList]);

  useEffect(() => {
    const subscription = useNewSubscription().subscribe({
      next: (data) => {
        const news = data.value.data.onCreateNews;

        setNewsList([...newsList, news]);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [newsList, setNewsList, useNewSubscription]);

  return (
    <div className={styles.cards}>
      {newsList &&
        newsList.map((news) => <NewsCard news={news} key={news.id} />)}
    </div>
  );
};

export default Subscription;
