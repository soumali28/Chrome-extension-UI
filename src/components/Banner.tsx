import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Banner: React.FC = () => {
  return (
    <div className="px-2 py-3 bg-sky-200 border rounded my-4 ">
      <div className="flex justify-between items-top relative  text-gray-600">
        <div>
          <p> The smartest and fastest AI yet?</p>
          <p>Invite friends to try Claude 3.5 Sonnet for free!</p>
        </div>
        <div className="text-xs font-bold absolute top-0 right-0 p-1 bg-gray-100 rounded-full">
        <AiOutlineClose />
        </div>
      </div>

      <div className="mt-2">
        <button className="text-sky-500 font-semibold mr-2">Try Now</button>
        <button className="text-gray-400">Dismiss</button>
      </div>
    </div>
  );
};

export default Banner;
