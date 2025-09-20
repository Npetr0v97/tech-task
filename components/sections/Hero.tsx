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
      className={`flex flex-col justify-center items-start min-h-[20vh] text-white mb-4 mt-9 pt-9 w-full px-8 ${className}`}
    >
      <span className="flex items-center self-center color-[var(--brand-color)] mb-4">
        <HeroIcon className="text-[var(--brand-color)] w-5 h-5 sm:w-7 sm:h-7" />
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold ml-1">
          Rewards Dashboard
        </h1>
      </span>

      {/* Top texts */}
      <div className="flex justify-between mb-2 w-full text-[var(--typography-secondary)] text-sm sm:text-lg md:text-xl">
        <h2>
          Earned{' '}
          <span className="text-[var(--brand-color)] font-semibold">
            $124.34
          </span>
        </h2>
        <h2>
          Total{' '}
          <span className="text-[var(--typography-active)] font-extrabold">
            $25,000.00
          </span>
        </h2>
      </div>

      {/* Progress Bar */}
      {mounted && (
        <div className="w-[99.5%] m-auto mb-2 mt-0 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-[var(--brand-color)] origin-left"
          />
        </div>
      )}

      {/* Bottom texts */}
      <div className="flex justify-between w-full text-[var(--typography-secondary)] text-[0.65rem] sm:text-base md:text-lg">
        <h2>Next Level: 2.5X Rewards rate for Points and SOL</h2>

        {!copied ? (
          <h2
            className="flex gap-1 cursor-pointer items-center"
            onClick={handleCopy}
          >
            {textToCopy}{' '}
            <CopyIcon className="text-[var(--typography-secondary)]" />
          </h2>
        ) : (
          <span className="mr-4 text-md text-[var(--brand-color)]">
            Copied!
          </span>
        )}
      </div>
    </motion.div>
  );
}
