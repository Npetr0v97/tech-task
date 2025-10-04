import Image from 'next/image';
import Link from 'next/link';

import DesktopMenu from '../ui/DesktopMenu';
import MobileMenu from '../ui/MobileMenu';
const menuItems = [
  { name: 'Page 1', href: '/', isActive: false },
  { name: 'Page 2', href: '/random', isActive: false },
  { name: 'Page 3', href: '/error', isActive: false },
  { name: 'Page 4', href: '/about', isActive: false },
  { name: 'Rewards', href: '/rewards', isActive: false },
];
export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--global-header)] h-12 px-3 flex items-center gap-5.5 border-b border-black">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={24} />
        </Link>
      </div>
      {/* Desktop Menu */}
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </nav>
  );
}
