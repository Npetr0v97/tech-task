'use client';

import { usePathname } from 'next/navigation';
import MenuItemLink from './MenuItemLink';
import { MenuItem } from '@/lib/types/navbar';

export default function DesktopMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const pathname = usePathname();
  return (
    <div className="flex gap-2">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <MenuItemLink
            menuItem={item}
            isActive={isActive}
            key={`${item.name}-${index}`}
          />
        );
      })}
    </div>
  );
}
