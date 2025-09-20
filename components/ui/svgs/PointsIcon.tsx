'use client';
import * as React from 'react';
import { IconProps } from '@/lib/types/icon';

const PointsIcon = ({ width = 25, height = 25, className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 25"
    className={className} // can pass text color, size, etc.
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.027 14.717a6 6 0 1 0 0-12 6 6 0 0 0 0 12M18.117 11.087a6.002 6.002 0 0 1 2.113 9.898 6.002 6.002 0 0 1-9.863-2.268"
    ></path>
  </svg>
);

export default PointsIcon;
