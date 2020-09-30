import { useQuery, useInfiniteQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { getNews, listNewss } from '../graphql/queries';

export const fetchSingleNews = (key, id) =>
  API.graphql(graphqlOperation(getNews, { id }));

export const useSingleNewsQuery = (id) =>
  useQuery(['news', id], fetchSingleNews);

export const fetchNewsList = async (key, config) => {
  const response = await API.graphql(graphqlOperation(listNewss, config));

  return response.data.listNewss;
};

export const useNewsListQuery = () => useQuery('news', fetchNewsList);

export const useNewsInfiniteListQuery = ({ limit }) =>
  useInfiniteQuery(
    'newsInfinite',
    // Use closure for setting up the initial load's config. [The rest done by 'getFetchMore']
    (key, config = { limit }) => fetchNewsList(key, config),
    {
      getFetchMore: ({ nextToken }, allGroups) => {
        // Should return falsy if there's no more item --> that's how 'canFetchMore' works
        return nextToken && { nextToken, limit };
      },
    }
  );
