import { MenuItem } from '@/lib/types/navbar';
import Link from 'next/link';

export default function MenuItemLink({
  menuItem,
  isActive = false,
}: {
  menuItem: MenuItem;
  isActive: boolean;
}) {
  return (
    <Link
      href={menuItem.href}
      className={`flex items-center h-15 px-5 hover:text-[var(--typography-active)] border-b-2 hover:border-[var(--typography-active)] font-medium cursor-pointer transition duration-300
              ${
                isActive
                  ? 'text-[var(--typography-active)] border-b-2 border-[var(--typography-active)]'
                  : 'text-[var(--typography-secondary)] border-b-2 border-transparent hover:text-[var(--typography-active)] hover:border-[var(--typography-active)]'
              }
              `}
    >
      {menuItem.name}
    </Link>
  );
}
