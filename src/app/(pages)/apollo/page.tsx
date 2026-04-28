import type { Metadata } from 'next';
import apolloData from '@/data/apollo.json';

export const metadata: Metadata = {
  title: "Apollo's Gallery",
  description: "A photo gallery of Apollo, Wesley Till's dog.",
  openGraph: {
    images: [{ url: '/apollo.jpeg' }],
  },
};
import ApolloTabs from '@/components/apollo/ApolloTabs';

export default function Apollo() {
  return <ApolloTabs tabs={apolloData.tabs} />;
}
