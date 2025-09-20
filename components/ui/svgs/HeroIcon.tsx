'use client';
import { IconProps } from '@/lib/types/icon';

const HeroIcon = ({ width = 20, height = 20, className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 21 21"
    className={className} // can pass text color, size, etc.
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.5 6.717v13m0-13c-.362-1.49-.985-2.765-1.787-3.656C7.91 2.169 6.965 1.7 6 1.717a2.5 2.5 0 0 0 0 5m4.5 0c.362-1.49.985-2.765 1.787-3.656.803-.892 1.748-1.36 2.713-1.344a2.5 2.5 0 0 1 0 5m2.5 4v7a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-7m-1-4h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1"
    ></path>
  </svg>
);

export default HeroIcon;
