'use client';
import * as React from 'react';
import { IconProps } from '@/lib/types/icon';

const CopyIcon = ({ width = 11, height = 11, className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 23 23"
    className={className} // can pass text color, size, etc.
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M19.027 22.717h-10c-1.65 0-3-1.35-3-3v-10c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3m-10-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1z"
    ></path>
    <path
      fill="currentColor"
      d="M3.027 16.717c-1.65 0-3-1.35-3-3v-10c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3 0 .55-.45 1-1 1s-1-.45-1-1-.45-1-1-1h-10c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1"
    ></path>
  </svg>
);

export default CopyIcon;
