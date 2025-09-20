'use client';
import * as React from 'react';
import { IconProps } from '@/lib/types/icon';

const SolanaIcon = ({ width = 31, height = 25, className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 31 25"
    className={className} // can pass text color, size, etc.
  >
    <path
      fill="url(#paint0_linear_4_114)"
      d="M25.783 5.996c-.184.17-.424.265-.674.267H1.45c-.84 0-1.264-.96-.683-1.522L4.655.995a1 1 0 0 1 .672-.278h23.75c.849 0 1.264.97.674 1.533z"
    ></path>
    <path
      fill="url(#paint1_linear_4_114)"
      d="M25.783 24.46a1 1 0 0 1-.674.257H1.45c-.84 0-1.264-.951-.683-1.513l3.886-3.757a.97.97 0 0 1 .672-.267h23.75c.849 0 1.264.96.674 1.522z"
    ></path>
    <path
      fill="url(#paint2_linear_4_114)"
      d="M25.783 10.216a1 1 0 0 0-.674-.258H1.45c-.84 0-1.264.952-.683 1.514l3.886 3.756c.184.169.423.264.672.267h23.75c.849 0 1.264-.96.674-1.522z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_4_114"
        x1="0.5"
        x2="30.027"
        y1="24.717"
        y2="0.717"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9945FF"></stop>
        <stop offset="1" stopColor="#14F195"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_114"
        x1="0.5"
        x2="30.027"
        y1="24.717"
        y2="0.717"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9945FF"></stop>
        <stop offset="1" stopColor="#14F195"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_4_114"
        x1="0.5"
        x2="30.027"
        y1="24.717"
        y2="0.717"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9945FF"></stop>
        <stop offset="1" stopColor="#14F195"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default SolanaIcon;
