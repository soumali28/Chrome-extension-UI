import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
const logo =  require("../assets/logo.png");

const Header: React.FC = () => {
  return (
    <div className="p-4 flex items-center justify-evenly bg-white border-b">
      <div className="flex items-center gap-3">
      <div className="w-[50px]">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-xl font-bold">Help Ai Chat Bot</h1>
      </div>
      <button className="text-xl font-bold">
      <AiOutlineClose />
      </button>
    </div>
  );
};

export default Header;
