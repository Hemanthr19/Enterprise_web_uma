import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import SymbolImg from './../assets/books/symbol.png';
import LanguageDropdown from './../components/LanguageDropdown';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigation = [
    { name: t('Products'), href: '/Product' },
    { name: t('AboutUs'), href: '/About' },
    { name: t('ContactUs'), href: '/Contact' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className='max-w-screen-2xl mx-auto py-5'>
      <nav className='w-full flex justify-between items-center bg-sky-900 p-3'>
        {/* Left: Logo and Brand */}
        <div className='flex items-center md:gap-16 gap-4'>
          <Link to='/' className='flex items-center gap-2'>
            <img src={SymbolImg} alt='Logo' className='h-8 w-[60px] pl-0 rounded-2xl' />
            <h2 className='text-white text-lg font-semibold'>UMA ENTERPRISES</h2>
          </Link>
        </div>

        {/* Right: Navigation */}
        <div className='relative flex items-center space-x-4 pr-4'>

          {/* Mobile Menu */}
          <div className='block lg:hidden' ref={dropdownRef}>
            <button className='py-2' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <FaBars className='text-white text-xl' />
            </button>

            {isDropdownOpen && (
              <div className='absolute right-0 mt-2 bg-white rounded-md w-48 py-1 shadow-lg z-40'>
                <ul className='py-2'>
                  <li>
                    <Link to='/' onClick={() => setIsDropdownOpen(false)} className='block px-4 py-2 text-sm hover:bg-slate-300'>
                      {t('Home')}
                    </Link>
                  </li>
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className='block px-4 py-2 text-sm hover:bg-slate-300'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-6'>
            <Link to='/' className='text-white text-sm'>{t('Home')}</Link>
            {navigation.map((item) => (
              <Link key={item.href} to={item.href} className='text-white text-sm'>
                {item.name}
              </Link>
            ))}
            <LanguageDropdown />
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
