// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-grey flex content-left">
      <p>&copy; {currentYear} @sqsux</p>
    </footer>
  );
};

export default Footer;
