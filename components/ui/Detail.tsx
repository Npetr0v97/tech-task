'use client';
import { DetailProps } from '@/lib/types/cards';

export default function Detail({ label, value }: DetailProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center text-[0.55rem] sm:text-xs md:text-sm">
      <div className="font-thin font-[12px] text-[var(--typography-secondary)] ">
        {label}
      </div>
      <div className="font-medium text-[var(--typography-active)] mt-1">
        {value}
      </div>
    </div>
  );
}
