import Hero from '@/components/sections/Hero';
import Card from '@/components/sections/Card';
import CardContainer from '@/components/sections/CardContainer';
import {
  getTransactionsData,
  getUserData,
  getThreeCardData,
} from '@/lib/utils/config';

export default async function Rewards() {
  const BASE_URL = 'https://tech-task-be-production.up.railway.app';

  // Fetch config
  const configProfileRes = await fetch(`${BASE_URL}/config/?type=profile`);
  const configProfile = await configProfileRes.json();
  const configTransactionsRes = await fetch(
    `${BASE_URL}/config/?type=transactions`
  );
  const configTransactions = await configTransactionsRes.json();

  // Fetch profileData
  const profileDataRes = await fetch(`${BASE_URL}/profile`);
  const profileData = await profileDataRes.json();
  // Fetch transactions
  const transactionsRes = await fetch(`${BASE_URL}/transactions`);
  const transactions = await transactionsRes.json();

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
