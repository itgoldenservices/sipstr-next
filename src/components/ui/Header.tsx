
import React from 'react';
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <Image src="/SipStr.png" alt="SipStr Logo" width={300} height={300} className="h-10 w-auto" />
      </div>
    </header>
  );
};

export default Header;
