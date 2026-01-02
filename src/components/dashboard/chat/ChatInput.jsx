const ChatInput = () => {
  return (
    <div className="px-4 py-3 border-t border-borderColor bg-white/70 flex items-center gap-2">
      <input
        type="text"
        placeholder="Write something…"
        className="flex-1 px-4 py-2 rounded-full border border-borderColor outline-none text-sm"
      />
      <button className="px-4 py-2 rounded-full bg-primary text-white text-sm">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
