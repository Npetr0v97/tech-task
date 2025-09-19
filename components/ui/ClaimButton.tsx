import { ClaimButtonProps } from '@/lib/types/cards';

export default function ClaimButton({ value, Icon }: ClaimButtonProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="text-[var(--typography-active)]">Claim</div>
      <button className="flex flex-row gap-1 items-center justify-center px-8 py-2 bg-[var(--button-primary)] text-white border-[var(--brand-color)] border-1 rounded hover:bg-[var(--green-800)] cursor-pointer transition">
        <div>
          <Icon height={14} width={14} />
        </div>
        <div>{value}</div>
      </button>
    </div>
  );
}
