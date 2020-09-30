import NewsCard from '../components/NewsCard';
import { useNewsInfiniteListQuery } from '../hooks/useNewsQuery';
import Button from '../components/Button';
import styles from '../styles/InfiniteScrollPage.module.css';

const InfiniteScroll = () => {
  const {
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    isLoading,
  } = useNewsInfiniteListQuery({ limit: 5 });

  if (isLoading) return <h1>Loading...</h1>;

  const newsList = data.reduce(
    (previousValue, currentValue) => [...previousValue, ...currentValue.items],
    []
  );

  return (
    <div className={styles.cards}>
      {newsList.map((news) => (
        <NewsCard className={styles.listItem} news={news} key={news.id} />
      ))}
      {isFetchingMore && <h3>Fetching...</h3>}
      <Button
        label="Load more"
        disabled={!canFetchMore}
        onClick={() => fetchMore()}
      />
    </div>
  );
};

export default InfiniteScroll;
