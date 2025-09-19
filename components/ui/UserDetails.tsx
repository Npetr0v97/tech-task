import { UserDetailsProps } from '@/lib/types/cards';
import Image from 'next/image';

export default function UserDetails({ username, imgUrl }: UserDetailsProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      {imgUrl && <Image src={imgUrl} alt="Logo" width={35} height={35} />}
      {!imgUrl && (
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md bg-(image:--user-avatar-gradient) mr-2 flex items-center justify-center"></div>
      )}
      <div className="text-xs sm:text-sm md:text-base text-[var(--typography-active)]">
        {username}
      </div>
    </div>
  );
}
