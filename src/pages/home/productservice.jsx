import React, { useEffect, useState } from 'react';
import Bookcard from '../books/BookCard';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Productservice = () => {
  const [books, setBooks] = useState([]);
  const [selectcategory, setcategory] = useState('Select product');
  const { t } = useTranslation();

  const Categories = [
    'Select product',
    'Relay',
    'CH Contactor',
    'MK-1 Coil',
    'Motor Starter'
  ];

  useEffect(() => {
    fetch('book.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredbooks =
    selectcategory === 'Select product'
      ? books
      : books.filter((book) => book.category === selectcategory);
  

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6 text-white'>
        {t('ProductsServices')}
      </h2>

      <div className='mb-8 flex items-center'>
        <select
          onChange={(e) => setcategory(e.target.value)}
          name='category'
          id='category'
          className='border bg-gray-400 border-gray-300 px-9 py-2 rounded-md focus:outline-none'
        >
          {Categories.map((category, index) => (
            <option key={index} value={category}>
              {t(category)}
            </option>
          ))}
        </select>
      </div>

      {filteredbooks.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          {filteredbooks.map((book, index) => (
            <SwiperSlide key={index}>
              <Bookcard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className='text-white text-lg'>{t('NoProductsFound')}</p>
      )}
    </div>
  );
};

export default Productservice;
