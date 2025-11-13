import { Camera, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import type { User, Page } from '../App';

interface NavbarProps {
  user: User | null;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  currentPage: Page;
}

export function Navbar({ user, onNavigate, onLogout, currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = user
    ? [
        { label: 'Beranda', page: 'home' as Page },
        { label: 'Dashboard', page: 'dashboard' as Page },
        { label: 'Paket Foto', page: 'packages' as Page },
        { label: 'Fotografer', page: 'portfolio' as Page },
        { label: 'Galeri Saya', page: 'gallery' as Page },
      ]
    : [
        { label: 'Beranda', page: 'home' as Page },
        { label: 'Paket Foto', page: 'packages' as Page },
        { label: 'Fotografer', page: 'portfolio' as Page },
      ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Camera className="h-8 w-8 text-blue-600" />
            <span className="text-xl text-gray-900">FotoKita</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">Halo, {user.name}</span>
                <Button onClick={onLogout} variant="outline" size="sm">
                  Keluar
                </Button>
              </div>
            ) : (
              <Button onClick={() => onNavigate('auth')} size="sm">
                Masuk / Daftar
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm py-2 ${
                    currentPage === item.page
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {user ? (
                <Button onClick={onLogout} variant="outline" className="w-full">
                  Keluar
                </Button>
              ) : (
                <Button onClick={() => {
                  onNavigate('auth');
                  setMobileMenuOpen(false);
                }} className="w-full">
                  Masuk / Daftar
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
