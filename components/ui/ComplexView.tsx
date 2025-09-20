'use client';
import Detail from '@/components/ui/Detail';

export default function ComplexView() {
  return (
    <div className="flex flex-row text-[var(--typography-active)] gap-1 sm:gap-2 justify-around mr-0 sm:mr-2">
      <Detail label="Referrals" value={8} />
      <div className="w-px bg-[var(--stroke-main)]" />
      <Detail label="Active Referrals" value={6} />
      <div className="w-px bg-[var(--stroke-main)]" />
      <Detail label="Referral Tier" value="S+" />
      <div className="w-px bg-[var(--stroke-main)]" />
      <Detail label="Total Earned" value="$0" />
    </div>
  );
}
