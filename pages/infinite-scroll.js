import { useEffect, useRef } from 'react';
import NewsCard from '../components/NewsCard';
import { useNewsInfiniteListQuery } from '../hooks/useNewsQuery';
// import Button from '../components/Button';
import styles from '../styles/InfiniteScrollPage.module.css';

const InfiniteScroll = () => {
  const {
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    isLoading,
    isFetchedAfterMount,
  } = useNewsInfiniteListQuery({ limit: 5 });
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isFetchedAfterMount) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            if (isIntersecting && canFetchMore && !isFetchingMore) {
              fetchMore();
            }
          });
        },
        { threshold: 1 }
      );

      observer.observe(triggerRef.current);

      return () => {
        observer.unobserve(triggerRef.current);
      };
    }
  }, [isFetchedAfterMount, canFetchMore, isFetchingMore]);

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

      <div ref={triggerRef} />

      {/*
        <Button
          label="Load more"
          disabled={!canFetchMore}
          onClick={() => fetchMore()}
        />
      */}
    </div>
  );
};

export default InfiniteScroll;
