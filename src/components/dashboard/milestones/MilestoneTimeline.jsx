import MilestoneCard from "./MilestoneCard";

const milestones = [
  {
    id: 1,
    title: "First Conversation",
    date: "Jan 10, 2024",
    description:
      "We talked for hours and didn’t realize how fast time passed.",
    image: false,
  },
  {
    id: 2,
    title: "First Trip Together",
    date: "Aug 18, 2024",
    description:
      "That trip changed everything. We laughed, fought, learned, and grew.",
    image: true,
  },
];

const MilestoneTimeline = () => {
  return (
    <div className="relative pl-6 space-y-8">
      {/* Vertical line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-borderColor" />

      {milestones.map((milestone) => (
        <MilestoneCard
          key={milestone.id}
          milestone={milestone}
        />
      ))}
    </div>
  );
};

export default MilestoneTimeline;
