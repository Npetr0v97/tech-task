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
    <nav className="fixed top-0 left-0 w-full bg-(image:--background-gradient) shadow-md z-50">
      <div className="flex items-center justify-start h-15 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-white text-lg font-bold">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
        </div>
        {/* Desktop Menu */}
        <DesktopMenu menuItems={menuItems} />
        <MobileMenu menuItems={menuItems} />
      </div>
    </nav>
  );
}
