'use client';
import * as React from 'react';
import HeroIcon from '@/components/ui/svgs/HeroIcon';
import CopyIcon from '@/components/ui/svgs/CopyIcon';
import { useState } from 'react';

export default function Hero({ className = '' }: { className?: string }) {
  const progress = 'w-[35%]';
  const [copied, setCopied] = useState(false);
  const textToCopy = 'https://Platform.io/@R433137';

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2s
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };
  return (
    <div
      className={`flex flex-col bg-transparent justify-center items-start min-h-[20vh] text-white mb-4 sm:mb-2 mt-9 pt-9 md:mt-11 md:pt-11 md:mt-13 md:pt-13 w-full px-8 ${className}`}
    >
      <span className="flex items-center self-center color-[var(--brand-color)] mb-4 sm:mb-2">
        <HeroIcon className="text-[var(--brand-color)]  w-5 h-5 sm:w-7 sm:h-7" />
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold ml-1">
          Rewards Dashboard
        </h1>
      </span>

      {/* Top texts */}
      <div className="flex justify-between mb-2 w-full text-[var(--typography-secondary)] text-sm sm:text-lg md:text-xl">
        <h2>
          Earned{' '}
          <span className="text-[var(--brand-color)] font-600 font-semibold ">
            $124.34
          </span>
        </h2>
        <h2>
          Total{' '}
          <span className="text-[var(--typography-active)] text-base sm:text-base md:text-xl font-extrabold">
            $25,000.00
          </span>
        </h2>
      </div>
      {/* Progress Bar Container */}
      <div className="w-[99.5%] m-auto mb-2 mt-0 h-2 bg-white/20 rounded-full overflow-hidden">
        {/* Progress */}
        <div className={`h-full bg-[var(--brand-color)] ${progress}`}></div>
      </div>

      {/* Bottom texts */}
      <div className="flex justify-between w-full text-[var(--typography-secondary)] text-[0.65rem] sm:text-base md:text-lg">
        <h2>Next Level: 2.5X Rewards rate for Points and SOL</h2>

        {!copied && (
          <h2
            className="flex gap-1 cursor-pointer items-center"
            onClick={handleCopy}
          >
            {textToCopy}{' '}
            <CopyIcon className="text-[var(--typography-secondary)]" />
          </h2>
        )}
        {copied && (
          <span className="mr-4 text-md text-[var(--brand-color)]">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
