'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // hamburger + close icons
import MenuItemLink from './MenuItemLink';
import { MenuItem } from '@/types/navbar';

export default function MobileMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="fixed right-5 top-5">
      <button
        className="sm:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={28} className="fixed right-5 top-5" />
        ) : (
          <Menu size={28} />
        )}
      </button>
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="sm:hidden flex mr-5 flex-col px-6 top-0 bg-(image:--background-gradient) rounded-[25px]">
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
      )}
    </div>
  );
}
