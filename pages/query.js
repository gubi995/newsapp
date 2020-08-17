import { useNewsListQuery } from '../hooks/useNewsQuery';

const Query = () => {
  const { data } = useNewsListQuery();

  return <div>{JSON.stringify(data, null, '\t')}</div>;
};

export default Query;
