import Hero from '@/components/sections/Hero';
import Card from '@/components/sections/Card';
import CardContainer from '@/components/sections/CardContainer';
import { fetchConfig, fetchBasicData } from '@/lib/services/api/rewards';
import {
  getTransactionsData,
  getUserData,
  getThreeCardData,
} from '@/lib/utils/config';

export default async function Rewards() {
  const [configProfile, configTransactions, profileData, transactions] =
    await Promise.all([
      fetchConfig('profile'),
      fetchConfig('transactions'),
      fetchBasicData('profile'),
      fetchBasicData('transactions'),
    ]);

  const threeCardData = getThreeCardData();
  const userData = getUserData(configProfile, profileData);
  const transactionsData = getTransactionsData(
    configTransactions,
    transactions
  );

  return (
    <div className="font-sans flex flex-col items-center justify-items-center">
      <Hero />
      <CardContainer
        Card={Card}
        cardDataArray={threeCardData}
        hasBackgroundGlow={true}
      />
      <CardContainer Card={Card} cardDataArray={userData} cardHeight={306} />
      <CardContainer
        Card={Card}
        cardDataArray={transactionsData}
        cardHeight={346}
      />
    </div>
  );
}
