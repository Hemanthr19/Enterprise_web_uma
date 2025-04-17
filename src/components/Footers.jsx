import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footers = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full">
          <h1 className='text-3xl text-gray-500'>UMA ENTERPRISES</h1>
          <ul className="flex flex-col md:flex-row gap-4 pt-6">
            <li><a href="/" className="hover:text-primary">{t('Home')}</a></li>
            <li><a href="/Product" className="hover:text-primary">{t('Products')}</a></li>
            <li><a href="/About" className="hover:text-primary">{t('AboutUs')}</a></li>
            <li><a href="/Contact" className="hover:text-primary">{t('ContactUs')}</a></li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full">
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6">
        <p clas>Since 2005</p>
      </div>
    </footer>
  );
};

export default Footers;
