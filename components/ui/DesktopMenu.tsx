'use client';

import { usePathname } from 'next/navigation';
import MenuItemLink from './MenuItemLink';
import { MenuItem } from '@/types/navbar';

export default function DesktopMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex space-x-5 ml-10 align-center">
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
