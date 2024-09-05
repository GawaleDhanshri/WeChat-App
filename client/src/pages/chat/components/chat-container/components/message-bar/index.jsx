import { IoSend } from "react-icons/io5";
import { useRef, useState } from "react";
import { useAppStore } from "@/store";
import { useSocket } from "@/contexts/SocketContext";
import { MESSAGE_TYPES } from "@/lib/constants";

const MessageBar = () => {
  const {
    selectedChatData,
    userInfo,
    selectedChatType,
  } = useAppStore();
  const [message, setMessage] = useState("");
  const socket = useSocket();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (message != "")
    {
      if (selectedChatType === "contact") {
        socket.emit("sendMessage", {
          sender: userInfo.id,
          content: message,
          recipient: selectedChatData._id,
          messageType: MESSAGE_TYPES.TEXT,
          audioUrl: undefined,
          fileUrl: undefined,
        });
      } else if (selectedChatType === "channel") {
        socket.emit("send-channel-message", {
          sender: userInfo.id,
          content: message,
          messageType: MESSAGE_TYPES.TEXT,
          audioUrl: undefined,
          fileUrl: undefined,
          channelId: selectedChatData._id,
        });
      }
    }
    setMessage("");
  };

  return (
    <div className="h-[10vh] bg-[#202d32] flex justify-center items-center px-8 gap-6 mb-5" >
      <div className="flex-1 flex bg-[#2a3843] rounded-full items-center gap-5 pr-5">
        <input
          className="flex-1 p-5 bg-transparent rounded-full focus:border-none focus:outline-none"
          placeholder="Enter message"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <button
        className="bg-[#059485] rounded-full flex items-center justify-center p-5 gap-2 focus:border-none focus:outline-none hover:bg-[#015c4a] transition-all duration-300 "
        onClick={handleSendMessage}
      >
        <IoSend className="text-2xl" />
      </button>
    </div>
  );
};

export default MessageBar;
