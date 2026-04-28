import apolloData from '@/data/apollo.json';
import ApolloTabs from '@/components/apollo/ApolloTabs';

export default function Apollo() {
  return <ApolloTabs tabs={apolloData.tabs} />;
}
