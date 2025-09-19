import { SummaryViewProps } from '@/lib/types/cards';
import MeteoriteIcon from '@/components/ui/svgs/MeteoriteIcon';
export default function SummaryView({
  text,
  Icon = MeteoriteIcon,
  className,
}: SummaryViewProps) {
  return (
    <div className="flex flex-row gap-1 items-center justify-center">
      <Icon
        width={18}
        height={18}
        className="text-[var(--typography-secondary)]"
      />
      <div className="text-[var(--typography-active)] font-600 font-semibold">
        {text}
      </div>
    </div>
  );
}
