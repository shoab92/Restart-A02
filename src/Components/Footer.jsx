import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 xl:px-0">
        <div className="
          grid grid-cols-1 gap-10
          md:grid-cols-2 md:gap-8
          lg:grid-cols-6 lg:gap-6
        ">
          <div className="lg:col-span-2">
            <h1 className="font-bold text-xl mb-4">CS - Ticket System</h1>
            <p className="text-gray-400 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              {' '}
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Company</h2>
            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Services</h2>
            <ul className="space-y-3 text-gray-400">
              <li>Product and Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Information</h2>
            <ul className="space-y-3 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Social Links</h2>
            <ul className="space-y-3 text-gray-400">
              <li>@CS_TicketSystem</li>
              <li>@CS_TicketSystem</li>
              <li>@CS_TicketSystem</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
