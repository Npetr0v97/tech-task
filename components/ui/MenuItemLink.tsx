'use client';
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
      className={`px-6 py-3.5 border-b-2 hover:border-[var(--typography-active)] hover:text-[var(--typography-active)] font-semibold text-xs leading-none align-middle cursor-pointer transition duration-300
              ${
                isActive
                  ? 'text-[var(--typography-active)] border-[var(--typography-active)]'
                  : 'text-[var(--typography-secondary)] border-transparent hover:text-[var(--typography-active)]'
              }
              `}
    >
      {menuItem.name}
    </Link>
  );
}
