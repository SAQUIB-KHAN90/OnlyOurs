const ChatHeader = () => {
  return (
    <div className="px-4 py-3 border-b border-borderColor bg-white/70 backdrop-blur">
      <h3 className="font-heading text-lg text-primary">
        Private Chat 💗
      </h3>
      <p className="text-xs text-textMuted">
        Only visible to you two
      </p>
    </div>
  );
};

export default ChatHeader;
