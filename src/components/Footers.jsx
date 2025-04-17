import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footers = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl text-gray-500">UMA ENTERPRISES</h1>
          <ul className="flex flex-col md:flex-row gap-4 pt-6">
            <li><Link to="/" className="hover:text-primary">{t('Home')}</Link></li>
            <li><Link to="/Product" className="hover:text-primary">{t('Products')}</Link></li>
            <li><Link to="/About" className="hover:text-primary">{t('AboutUs')}</Link></li>
            <li><Link to="/Contact" className="hover:text-primary">{t('ContactUs')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">Since 2005</p>
      </div>
    </footer>
  );
};

export default Footers;
