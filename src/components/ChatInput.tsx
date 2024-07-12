import React from "react";
import ChatFunc from "./ChatFunc";
import { VscWand } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import AddTools from "./AddTools";
import { IoMdSend } from "react-icons/io";

const ChatInput: React.FC = () => {
  return (
    <div>
      <ChatFunc />
      <div className="px-2 py-3 bg-white border-t flex items-center space-x-2">
        <div className="flex-1 relative rounded bg-gray-100 p-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full my-1 p-2 bg-gray-100 text-sm -full focus:outline-none"
          />

          <div className="flex items-center justify-between text-sky-500">
            <div className="flex items-center gap-4">
              <button>
                {" "}
                <VscWand />
              </button>
              <button>
                {" "}
                <MdAlternateEmail />
              </button>
              <button>
                {" "}
                <AddTools />
              </button>
            </div>

            <div>
              <button >
                <IoMdSend size={18}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
