'use client';
import { SimpleTextProps } from '@/lib/types/cards';

export default function SimpleText({ value, className = '' }: SimpleTextProps) {
  const text = typeof value === 'string' ? value : value.text;
  const label = typeof value === 'string' ? undefined : value.label;
  return (
    <div className={`${className}`}>
      {label && (
        <span className="font-400 text-[var(--typography-secondary)] text-xs sm:text-[0.8rem] md:text-[0.8rem]">
          {label}:{' '}
        </span>
      )}
      <span className="text-xs sm:text-sm md:text-base">{text}</span>
    </div>
  );
}
