'use client';

import { motion } from 'framer-motion';
import * as React from 'react';
import HeroIcon from '@/components/ui/svgs/HeroIcon';
import CopyIcon from '@/components/ui/svgs/CopyIcon';
import { useEffect, useState } from 'react';

export default function Hero({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const progress = 35;
  const textToCopy = 'https://Platform.io/@R433137';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-start pt-[30px] gap-1 w-full min-h-[146px] bg-radial-header flex-none self-stretch grow-0"
    >
      <div className="flex flex-col items-start px-3 h-[146px] w-full self-stretch grow-0">
        <div className="flex flex-row items-center justify-between self-stretch grow-0 pt-5 pb-1 gap-2 self-stretch grow-0">
          <div className="flex flex-row gap-2 justify-center w-full">
            <div className="w-6 h-6">
              <HeroIcon
                className="text-[var(--brand-color)] mt-[3px] ml-[3px]"
                width={21}
                height={21}
              />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold leading-[31px] flex items-center text-[var(--typography-active)]">
              Rewards Dashboard
            </h1>
          </div>
        </div>
        <div className="flex flex-col py-2 px-3 gap-2 w-full">
          {/* Top texts */}
          <div className="flex justify-between items-center w-full">
            <div>
              <span className="text-[var(--typography-secondary)] font-normal text-xs md:text-sm leading-[14px] align-middle">
                Earned{' '}
              </span>
              <span className="text-[var(--brand-color)] font-bold text-base leading-[16px] align-middle">
                $124.29
              </span>
            </div>
            <div>
              <span className="text-[var(--typography-secondary)] font-normal text-xs md:text-sm leading-[14px] align-middle">
                Total{' '}
              </span>
              <span className="text-[var(--typography-active)] font-bold text-base leading-[16px] align-middle">
                $25,000.00
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full">
            {mounted && (
              //  className="w-[99.5%] m-auto mb-2 mt-0 h-2 bg-white/20 rounded-full overflow-hidden"
              <div className="h-2 bg-[var(--green-800)] rounded-full overflow-hidden border-[var(--green-800)] border-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="h-full bg-[var(--brand-color)] rounded-full origin-left"
                />
              </div>
            )}
          </div>
          {/* Bottom texts */}
          <div className="flex justify-between w-full text-[var(--typography-secondary)] font-normal text-xs leading-[12px] align-middle">
            <div>Next Level: 2.5X Rewards rate for Points and SOL</div>

            {!copied ? (
              <div
                className="flex gap-1 text-[var(--typography-active)] font-medium cursor-pointer items-center"
                onClick={handleCopy}
              >
                <div>{textToCopy}</div>
                <div>
                  <CopyIcon className="text-[var(--icon-main)]" />
                </div>
              </div>
            ) : (
              <span className="mr-4 text-md text-[var(--brand-color)]">
                Copied!
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
