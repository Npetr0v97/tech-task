import SummaryView from '@/components/ui/SummaryView';
import MeteoriteIcon from '@/components/ui/svgs/MeteoriteIcon';
import SolanaIcon from '@/components/ui/svgs/SolanaIcon';
import PointsIcon from '@/components/ui/svgs/PointsIcon';
import SimpleText from '@/components/ui/SimpleText';
import ComplexView from '@/components/ui/ComplexView';
import UserDetails from '@/components/ui/UserDetails';
import ClaimButton from '@/components/ui/ClaimButton';
import TableView from '@/components/ui/TableView';
import { ConfigParams } from '../types/config';

const commonTextStyleActive = 'text-[var(--typography-active)] font-medium';
const commonTextStyleSecondary =
  'text-[var(--typography-secondary)] font-medium';

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
  },
];

const transactionsData = [
  {
    topLeftComponent: SimpleText({
      value: 'Network',
      className: commonTextStyleSecondary,
    }),
    MainContent: TableView,
  },
];

export function getTransactionsData(
  configTransactions: ConfigParams,
  transactions: number[][]
) {
  return transactionsData.map((transaction) => ({
    ...transaction,
    mainContentProps: {
      headers: configTransactions?.headers,
      rowLabels: configTransactions?.rowLabels,
      data: transactions,
    },
  }));
}

export function getUserData(configUserData: ConfigParams, data: number[][]) {
  return userData.map((transaction) => ({
    ...transaction,
    mainContentProps: {
      headers: configUserData?.headers,
      rowLabels: configUserData?.rowLabels,
      data: data,
    },
  }));
}

export function getThreeCardData() {
  return threeCardData;
}
