'use client';
import Detail from '@/components/ui/Detail';

export default function ComplexView() {
  return (
    <div className="flex flex-row text-[var(--typography-active)]">
      <Detail label="Referrals" value={8} firstElement />

      <Detail label="Active Referrals" value={6} />

      <Detail label="Referral Tier" value="S+" />
      <Detail label="Total Earned" value="$0" finalElement />
    </div>
  );
}
