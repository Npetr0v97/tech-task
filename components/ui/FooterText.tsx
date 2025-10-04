'use client';
import { FooterProps } from '@/lib/types/cards';

export default function FooterText({ text }: FooterProps) {
  return (
    <div className="font-normal text-xs leading-[12px] align-middle text-[var(--typography-active)]">
      {text}
    </div>
  );
}
