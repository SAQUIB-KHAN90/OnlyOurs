import ChatBubble from "./ChatBubble";

const messages = [
  {
    id: 1,
    text: "Hey… I was thinking about you 💗",
    sender: "me",
    time: "9:41 PM",
  },
  {
    id: 2,
    text: "I felt that. I was smiling already 🥰",
    sender: "them",
    time: "9:42 PM",
  },
];

const ChatMessages = () => {
  return (
    <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
      {messages.map((msg) => (
        <ChatBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default ChatMessages;
