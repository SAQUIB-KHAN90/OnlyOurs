const GoalCard = ({ goal }) => {
  return (
    <div
      className={`flex items-center justify-between
      bg-white/70 border border-borderColor rounded-2xl px-6 py-4
      transition-all duration-300 hover:shadow-lg
      ${goal.completed ? "opacity-70" : ""}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">
          {goal.completed ? "✅" : "🌱"}
        </span>
        <p
          className={`text-sm ${
            goal.completed
              ? "line-through text-textMuted"
              : "text-primary"
          }`}
        >
          {goal.title}
        </p>
      </div>

      <span className="text-xs text-textMuted">
        {goal.completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
};

export default GoalCard;
