import Hero from '@/components/sections/Hero';
import Card from '@/components/sections/Card';
import CardContainer from '@/components/sections/CardContainer';
import SummaryView from '@/components/ui/SummaryView';
import MeteoriteIcon from '@/components/ui/svgs/MeteoriteIcon';
import SolanaIcon from '@/components/ui/svgs/SolanaIcon';
import PointsIcon from '@/components/ui/svgs/PointsIcon';
import SimpleText from '@/components/ui/SimpleText';
import ComplexView from '@/components/ui/ComplexView';
import UserDetails from '@/components/ui/UserDetails';
import ClaimButton from '@/components/ui/ClaimButton';
import TableView from '@/components/ui/TableView';

const commonTextStyleActive = 'text-[var(--typography-active)] font-medium';
const commonTextStyleSecondary =
  'text-[var(--typography-secondary)] font-medium';

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

  const threeCardData = [
    {
      topLeftComponent: SimpleText({
        value: 'My Rank',
        className: commonTextStyleSecondary,
      }),
      topRightComponent: SimpleText({
        value: 'Tier 2',
        className: commonTextStyleActive,
      }),
      MainContent: SummaryView,
      mainContentProps: { text: 'Meteorite', Icon: MeteoriteIcon },
    },
    {
      topLeftComponent: SimpleText({
        value: 'SOL Earned',
        className: commonTextStyleSecondary,
      }),
      topRightComponent: SimpleText({
        value: { label: 'Last Claim', text: "Feb' 24, 2025" },
        className: commonTextStyleActive,
      }),
      MainContent: SummaryView,
      mainContentProps: { text: '100.11K', Icon: SolanaIcon },
    },
    {
      topLeftComponent: SimpleText({
        value: 'My Points',
        className: commonTextStyleSecondary,
      }),
      topRightComponent: SimpleText({
        value: '1.5x Rewards',
        className: commonTextStyleActive,
      }),
      MainContent: SummaryView,
      mainContentProps: { text: '5,017 Points', Icon: PointsIcon },
    },
  ];

  const userData = [
    {
      topLeftComponent: UserDetails({ username: 'Username' }),
      topRightComponent: ComplexView(),
      bottomLeftComponent: SimpleText({
        value: 'Claim Your Earnings',
        className: commonTextStyleSecondary,
      }),
      bottomRightComponent: ClaimButton({ value: '0.134', Icon: SolanaIcon }),
      MainContent: TableView,
      mainContentProps: {
        headers: configProfile?.headers,
        rowLabels: configProfile?.rowLabels,
        data: profileData,
      },
    },
  ];

  const transactionsData = [
    {
      topLeftComponent: SimpleText({
        value: 'Network',
        className: commonTextStyleSecondary,
      }),
      MainContent: TableView,
      mainContentProps: {
        headers: configTransactions?.headers,
        rowLabels: configTransactions?.rowLabels,
        data: transactions,
      },
    },
  ];
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
