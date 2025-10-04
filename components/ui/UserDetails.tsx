'use client';
import { UserDetailsProps } from '@/lib/types/cards';

import Image from 'next/image';

export default function UserDetails({ username, imgUrl }: UserDetailsProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      {imgUrl && <Image src={imgUrl} alt="Logo" width={32} height={32} />}
      {!imgUrl && (
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md bg-(image:--user-avatar-gradient) mr-2 flex items-center justify-center"></div>
      )}
      <div className="font-semibold text-sm leading-[14px] align-middle text-[var(--typography-active)]">
        {username}
      </div>
    </div>
  );
}
