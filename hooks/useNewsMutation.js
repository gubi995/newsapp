import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';
import { createNews } from '../graphql/mutations';

const addNews = (news) =>
  API.graphql(graphqlOperation(createNews, { input: news }));

export const useNewsMutation = () => useMutation(addNews);
