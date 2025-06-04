import React from 'react';
import {ArrowDownToDot  } from 'lucide-react';


const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center mb-10 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <ArrowDownToDot size={24} className="text-[#212121]" />
        <span className="text-xl font-semibold text-[#212121]">SPOTS</span>
      </div>
    </header>
  );
};

export default Header;