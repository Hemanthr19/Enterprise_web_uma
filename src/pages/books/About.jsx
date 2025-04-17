import React from 'react';
import EnterpriseImg from '../../assets/books/enterprise-logo.jpeg'
const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 text-gray-800 font-secondary">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-primary text-white mb-4">About Uma Enterprises</h1>
        <p className="text-lg text-white">Crafting Excellence in Electrical Manufacturing Since 2005</p>
      </div>

      <div className="md:flex items-center gap-12 mb-16">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={EnterpriseImg} alt="Uma Enterprises Factory" className="rounded-full shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed text-gray-300">
            Uma Enterprises Private Limited is a renowned manufacturer of electrical components, specializing in <strong>starter motors</strong>, <strong>relays</strong>, and seasonal electrical products. Founded in <strong>2005</strong> by <strong>Mr. Anil Kumar V</strong>, our journey began with a humble goal—earning a livelihood through precision craftsmanship.
          </p>
          <p className="mt-4 text-lg leading-relaxed  text-gray-300">
            Today, Uma Enterprises has evolved into a trusted name in the electrical manufacturing sector. Operating through two dedicated units, we proudly employ over <strong>80 skilled workers</strong> and run more than <strong>20 advanced machines</strong>. Our components power <span className="text-primary font-medium">agricultural, industrial, and commercial</span> systems across Karnataka.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="bg-secondary text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-base leading-relaxed">
            To manufacture and deliver <strong>high-quality, durable, and efficient</strong> electrical components that enhance the functioning of essential applications. Each product undergoes <strong>rigorous quality checks</strong>, ensuring excellence from our facility to your field.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-primary text-secondary p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-base leading-relaxed">
            To become a <strong>leading electrical manufacturer in Karnataka</strong> over the next decade. We aim to expand our market reach, embrace <strong>automation</strong>, and constantly innovate — building a brand that stands for <strong>reliability, efficiency, and sustainability</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
