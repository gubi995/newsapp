import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { getNews, listNewss } from '../graphql/queries';

const fetchSingleNews = (key, id) =>
  API.graphql(graphqlOperation(getNews, { id }));

export const useSingleNewsQuery = (id) =>
  useQuery(['news', id], fetchSingleNews);

const fetchNewsList = async () => {
  const response = await API.graphql(graphqlOperation(listNewss));

  return response.data.listNewss.items;
};

export const useNewsListQuery = () => useQuery('news', fetchNewsList);
