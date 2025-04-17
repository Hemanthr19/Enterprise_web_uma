import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 text-gray-800 font-secondary">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-primary text-white">Get in Touch</h2>
        <p className="text-lg mt-2 text-gray-300">We’d love to hear from you. Reach out via call, visit, or email.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {/* Address */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <FaMapMarkerAlt className="text-primary text-3xl mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            NO.110 / 4B, 5th Cross,<br />
            Mahaganapathinagar, Rajajinagar,<br />
            Bangalore - 560010
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <FaPhoneAlt className="text-primary text-3xl mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Call Us</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            +91 83108 78512<br />
            +91 98866 31755
          </p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <FaEnvelope className="text-primary text-3xl mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <p className="text-sm text-gray-600 leading-relaxed break-words">
            umaenterprisesprivatelimited@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
