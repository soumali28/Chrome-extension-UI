import React from "react";
import { FaBolt } from "react-icons/fa";
import { GrCut } from "react-icons/gr";
import { BsPinAngleFill } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { TbMessagePlus } from "react-icons/tb";

const ChatFunc: React.FC = () => {
  return (
    <div className="flex m-4 justify-between">
      <div className="flex gap-3">
        <button>
          {" "}
          <FaBolt className="text-red-500" size={18} />
        </button>
        <button>
          {" "}
          <GrCut className="text-gray-400 rotate-180" size={18} />
        </button>
        <button>
          {" "}
          <BsPinAngleFill className="text-gray-400" size={18} />
        </button>
      </div>

      <div className="flex gap-3">
        <button>
          <LuClock3 className="text-gray-400 rotate-180" size={18} />
        </button>
        <button>
          {" "}
          <TbMessagePlus className="text-green-600" size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatFunc;
