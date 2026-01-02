import RageBubble from "./RageBubble";

const rageMessages = [
  {
    id: 1,
    text: "I felt ignored today and it hurt more than I expected.",
  },
];

const RageMessages = () => {
  return (
    <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
      {rageMessages.map((msg) => (
        <RageBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default RageMessages;
