import React from 'react';
import { useTranslation } from 'react-i18next';

const Newz = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-2">
      <div className="inline-block animate-scroll-right text-lg font-semibold text-blue-600">
        {t('UMA_NEWS')} 
      </div>
    </div>
  );
};

export default Newz;
