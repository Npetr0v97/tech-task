'use client';
import { ClaimButtonProps } from '@/lib/types/cards';

export default function ClaimButton({ value, Icon }: ClaimButtonProps) {
  return (
    <div className="flex flex-row gap-3 items-center text-[var(--typography-active)]">
      <div className=" font-semibold text-xs leading-4 align-middle">Claim</div>
      <button
        className="flex flex-row justify-center items-center py-[9px] px-4 
    gap-2.5 
    w-[120px] h-9
    hover:bg-[var(--green-800)]
    bg-[var(--button-primary)] 
    border border-[#4EB8D2] 
    rounded-md 
    cursor-pointer transition
    shadow-[inset_0px_-3px_3px_rgba(0,0,0,0.25),inset_0px_3px_3px_rgba(255,255,255,0.25)]"
      >
        <div>
          <Icon height={14} width={14} />
        </div>
        <div className="font-bold text-sm leading-[14px] align-middle">
          {value}
        </div>
      </button>
    </div>
  );
}
