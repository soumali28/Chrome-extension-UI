import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MessageNoti: React.FC = () => {
  return (
    <div className="relative bg-sky-200 border rounded px-2 py-3 my-4">
      <p className="w-[95%]  text-gray-600">
        Sider starts a new chat each time you reopen the sidebar. If you want to
        resume the last chat,{" "}
        <a href="#" className="text-sky-500">
          change this in the settings
        </a>
      </p>

      <div className="text-xs font-bold absolute top-0 right-0 p-1 bg-gray-100 rounded-full m-1">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default MessageNoti;
