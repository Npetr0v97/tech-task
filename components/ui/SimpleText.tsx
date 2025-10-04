'use client';
import { SimpleTextProps } from '@/lib/types/cards';

export default function SimpleText({ value, className = '' }: SimpleTextProps) {
  const text = typeof value === 'string' ? value : value.text;
  const label = typeof value === 'string' ? undefined : value.label;
  return (
    <div className={`${className}`}>
      {label && (
        <span className="text-[var(--typography-secondary)] font-normal text-xs leading-[12px] text-center">
          {label}:{' '}
        </span>
      )}
      <span className="font-medium text-xs leading-[12px] text-center">
        {text}
      </span>
    </div>
  );
}
