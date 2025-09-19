import { SimpleTextProps } from '@/lib/types/cards';

export default function SimpleText({ value, className = '' }: SimpleTextProps) {
  const text = typeof value === 'string' ? value : value.text;
  const label = typeof value === 'string' ? undefined : value.label;
  return (
    <div className={`${className}`}>
      {label && (
        <span className="font-400 text-[var(--typography-secondary)]">
          {label}:{' '}
        </span>
      )}
      <span className="font-500">{text}</span>
    </div>
  );
}
