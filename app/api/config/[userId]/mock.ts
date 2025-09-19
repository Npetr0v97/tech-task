export const mockConfigurations: {
  [key: string]: { [key: string]: { headers: string[]; rowLabels: string[] } };
} = {
  '12345': {
    profile: {
      headers: [
        '',
        'Total Referred',
        'Total Active',
        'Paid Out',
        'Total Unclaimed',
      ],
      rowLabels: ['Direct', 'Level 2', 'Level 3', 'Total'],
    },
    transactions: {
      headers: [
        'Date',
        'Total Referred',
        'Total Active',
        'Paid Out',
        'Total Unclaimed',
      ],
      rowLabels: ['Direct', 'Level 2', 'Level 3', 'Level 4', 'Total'],
    },
  },
};
