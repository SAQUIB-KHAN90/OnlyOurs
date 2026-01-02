import MemoryCard from "./MemoryCard";
import AddMemoryButton from "./AddMemoryButton";

const memories = [
  {
    id: 1,
    title: "Our first coffee together",
    date: "12 Feb 2025",
    description:
      "We talked for hours like time didn’t exist. That day still lives in my heart.",
    image: true,
  },
  {
    id: 2,
    title: "Late night call",
    date: "3 March 2025",
    description:
      "You fell asleep while I was still talking. I smiled the whole time.",
    image: false,
  },
];

const Memories = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-3xl text-primary">
          Memories
        </h2>
        <AddMemoryButton />
      </div>

      {/* Memory List */}
      <div className="space-y-6">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
};

export default Memories;
