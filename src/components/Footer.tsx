import React from 'react';

const Footer: React.FC = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="mx-auto w-[80%] text-center py-5 border-t border-[#212121]">
      <p className="text-[10px] text-[#666460]">{getCurrentYear()} © Spots</p>
    </footer>
  );
};

export default Footer;

