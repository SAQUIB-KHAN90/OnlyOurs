import GoalsHeader from "./GoalsHeader";
import AddGoalButton from "./AddGoalButton";
import GoalsList from "./GoalsList";

const Goals = () => {
  return (
    <div className="space-y-6">
      <GoalsHeader />
      <AddGoalButton />
      <GoalsList />
    </div>
  );
};

export default Goals;
