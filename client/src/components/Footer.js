// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; 2024 JobMart. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
            Contact Us
          </Link>
        </div>
        <p className="mt-4 text-gray-400 text-xs">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
