import React from "react";
import Header from "../components/Header";
import AdBanner from "../components/Banner";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import MessageNoti from "../components/MessageNoti";
const logo =  require("../assets/logo.png");

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex items-center gap-2 justify-center ">
        <div className="w-[50px]">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-3xl text-sky-500 font-semibold">Techstack</h1>
        </div>
        
        <AdBanner />
        <h2 className="text-2xl font-bold my-6 text-center mt-16 ">
          How can I assist you today?
        </h2>
        <ChatMessage message="Tell me something about the Big Bang so that I can explain it to my 5-year-old child" />
        <ChatMessage message="Please provide me with IO gift ideas for my friends birthday" />
        <ChatMessage message="Generate five catchy titles for my writing about the use case of ChatGPT" />
        <MessageNoti />
      </div>
      <ChatInput />
    </div>
  );
};

export default Home;
