const RageBubble = ({ message }) => {
  return (
    <div className="bg-secondary/30 text-textMuted
    px-4 py-3 rounded-xl text-sm leading-relaxed">
      {message.text}
    </div>
  );
};

export default RageBubble;
