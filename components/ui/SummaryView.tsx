'use client';
import { SummaryViewProps } from '@/lib/types/cards';
import MeteoriteIcon from '@/components/ui/svgs/MeteoriteIcon';
export default function SummaryView({
  text,
  Icon = MeteoriteIcon,
}: SummaryViewProps) {
  return (
    <div className="flex flex-row gap-1 items-center justify-center">
      <Icon
        width={14}
        height={14}
        className="text-[var(--typography-secondary)]"
      />
      <div className="text-[var(--typography-active)]  font-semibold text-sm leading-[14px] align-middle">
        {text}
      </div>
    </div>
  );
}
