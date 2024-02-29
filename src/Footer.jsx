import React from 'react';

const Footer = ({ length }) => {
  return (
    <div>
      {length} list {length === 1? 'item' : "items"}
    </div>
  );
};

export default Footer;
