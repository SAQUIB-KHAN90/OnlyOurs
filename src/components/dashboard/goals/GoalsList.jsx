import GoalCard from "./GoalCard";

const goals = [
  {
    id: 1,
    title: "Travel to the mountains together",
    completed: false,
  },
  {
    id: 2,
    title: "Celebrate our first anniversary",
    completed: true,
  },
];

const GoalsList = () => {
  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default GoalsList;
