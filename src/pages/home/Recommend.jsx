import React from 'react';
import ECMov from '../../assets/books/ec.mov';
import { useTranslation } from 'react-i18next';

const Recommend = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col md:flex-row py-16 justify-between items-center gap-12'>
      {/* Left: Video */}
      <div className='md:w-1/2 w-full flex justify-center md:justify-start'>
        <video 
          src={ECMov} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-auto rounded-lg" 
        />
      </div>

      {/* Right: Text */}
      <div className='md:w-1/2 w-full px-4'>
        <h2 className='md:text-4xl text-2xl font-medium mb-6 text-white'>
          {t('MissionVision')}
        </h2>
        <p className='mb-10 text-gray-300'>
          {t('MissionVisionDesc')}
        </p>
      </div>
    </div>
  );
};

export default Recommend;
