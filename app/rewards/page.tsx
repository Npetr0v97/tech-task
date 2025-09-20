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
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <Hero className="flex-2" />
      <CardContainer
        Card={Card}
        cardDataArray={threeCardData}
        className="flex-15"
        hasBackgroundGlow={true}
      />
      <CardContainer Card={Card} cardDataArray={userData} className="flex-15" />
      <CardContainer
        Card={Card}
        cardDataArray={transactionsData}
        className="flex-15"
      />
    </div>
  );
}
