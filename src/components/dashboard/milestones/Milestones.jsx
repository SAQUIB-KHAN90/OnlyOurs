import MilestonesHeader from "./MilestonesHeader";
import AddMilestoneButton from "./AddMilestoneButton";
import MilestoneTimeline from "./MilestoneTimeline";

const Milestones = () => {
  return (
    <div className="space-y-6">
      <MilestonesHeader />
      <AddMilestoneButton />
      <MilestoneTimeline />
    </div>
  );
};

export default Milestones;
