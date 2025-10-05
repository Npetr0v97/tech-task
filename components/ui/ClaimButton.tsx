'use client';
import { ClaimButtonProps } from '@/lib/types/cards';
import { useEffect, useState } from 'react';
import { getRandomNumber, formatNumber } from '@utils/helpers';
import { useSolActions } from '@store/solanaStore';

export default function ClaimButton({ value, Icon }: ClaimButtonProps) {
  const [randomReward, setRandomReward] = useState(0);
  const { increaseSolBy } = useSolActions();

  useEffect(() => {
    setRandomReward(getRandomNumber(1000, 10000));
  }, []);
  function clickHandler() {
    increaseSolBy(randomReward);
    setRandomReward(getRandomNumber(10000, 500000));
  }
  return (
    <div className="flex flex-row gap-3 items-center text-[var(--typography-active)]">
      <div className=" font-semibold text-xs leading-4 align-middle">Claim</div>
      <button
        onClick={clickHandler}
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
          {formatNumber(randomReward)}
        </div>
      </button>
    </div>
  );
}
