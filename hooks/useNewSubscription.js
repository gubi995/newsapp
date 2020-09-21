import { API, graphqlOperation } from 'aws-amplify';
import { onCreateNews } from '../graphql/subscriptions';

export const useNewSubscription = () =>
  API.graphql(graphqlOperation(onCreateNews));
