import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white/60 border border-borderColor rounded-2xl overflow-hidden">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
