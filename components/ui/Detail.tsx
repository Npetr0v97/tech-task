'use client';
import { DetailProps } from '@/lib/types/cards';

export default function Detail({
  label,
  value,
  firstElement = false,
  finalElement = false,
}: DetailProps) {
  return (
    <div
      className={`flex flex-col gap-1 px-5 justify-center items-center ${
        firstElement ? '' : 'border-l-1 border-[var(--stroke-main)]'
      } ${finalElement ? 'pr-0' : ''}`}
    >
      <div className="text-[var(--typography-secondary)] font-normal text-xs leading-[12px] align-middle">
        {label}
      </div>
      <div className="text-[var(--typography-active)] font-medium text-sm leading-[14px] align-middle">
        {value}
      </div>
    </div>
  );
}
