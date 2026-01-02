const ChatBubble = ({ message }) => {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm
        ${
          isMe
            ? "bg-primary text-white rounded-br-md"
            : "bg-secondary/40 text-textMuted rounded-bl-md"
        }`}
      >
        <p>{message.text}</p>
        <span className="block text-[10px] mt-1 opacity-70 text-right">
          {message.time}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
