import { UserDetailsProps } from '@/lib/types/cards';
import Image from 'next/image';

export default function UserDetails({ username, imgUrl }: UserDetailsProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      {imgUrl && <Image src={imgUrl} alt="Logo" width={40} height={40} />}
      {!imgUrl && (
        <div className="w-8 h-8 rounded-md bg-(image:--user-avatar-gradient) mr-2 flex items-center justify-center"></div>
      )}
      <div className="font-semibold text-[var(--typography-active)]">
        {username}
      </div>
    </div>
  );
}
