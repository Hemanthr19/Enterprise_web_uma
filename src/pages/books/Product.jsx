import React from 'react'
import { useState,useEffect } from 'react';
import { getImgUrl } from '../../utils/getImgUrl';

const Product = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/book.json')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);
    return (
      <section className="max-w-screen-2xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-primary text-white">Our Products</h2>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300">
              <img src={`${getImgUrl(product.coverImage)}`} alt={product.title} className=" w-full object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h4>
              <p className="text-primary text-md font-medium mb-4">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Product