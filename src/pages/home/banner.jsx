import React from 'react';
import EnterpriseImg from '../../assets/books/enterprise-logo.jpeg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='md:w-1/2 w-full flex justify-center md:justify-end'>
        <img src={EnterpriseImg} alt="Enterprise Logo" className='rounded-full bg-slate-900 h-[500px] w-[550px]' />
      </div>

      <div className='md:w-1/2 w-full px-4'>
        <h2 className='md:text-3xl text-2xl font-medium mb-6 text-white'>
          {t('Manufacturers')}
        </h2>
        <p className='mb-10 text-gray-300'>
          {t('BannerDesc')}
        </p>
        <button className='btn-primary rounded-2xl'>
          <Link to="/Product">{t('Explore')}</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
