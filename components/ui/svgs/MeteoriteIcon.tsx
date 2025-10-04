'use client';
import * as React from 'react';
import { IconProps } from '@/lib/types/icon';

const MeteoriteIcon = ({
  width = 14,
  height = 14,
  className = '',
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 25"
    className={className}
  >
    <defs>
      <linearGradient id="meteoriteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5499" />
        <stop offset="33%" stopColor="#66b8b9" />
        <stop offset="66%" stopColor="#b1d877" />
        <stop offset="100%" stopColor="#ffcd8c" />
      </linearGradient>
    </defs>
    <path
      stroke="url(#meteoriteGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m14.863 6.713-.386-1.933a.86.86 0 0 0-1.226-.6L8.508 6.553a10.6 10.6 0 0 0-2.75 1.982 7.725 7.725 0 0 0 10.926 10.925 10.6 10.6 0 0 0 1.982-2.75l2.37-4.743a.858.858 0 0 0-.599-1.225l-1.932-.387 2.892-5.37a.858.858 0 0 0-1.163-1.163z"
    />
    <path
      stroke="url(#meteoriteGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.999 18.22a4.002 4.002 0 1 0 0-8.004 4.002 4.002 0 0 0 0 8.004"
    />
  </svg>
);

export default MeteoriteIcon;
