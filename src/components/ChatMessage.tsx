import React from 'react';

interface ChatMessageProps {
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className="px-2 py-3 bg-gray-100 text-gray-600 border rounded my-2">
      {message}
    </div>
  );
};

export default ChatMessage;
