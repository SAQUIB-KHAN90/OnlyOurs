import RemindersHeader from "./RemindersHeader";
import AddReminderButton from "./AddReminderButton";
import RemindersList from "./RemindersList";

const Reminders = () => {
  return (
    <div className="space-y-6">
      <RemindersHeader />
      <AddReminderButton />
      <RemindersList />
    </div>
  );
};

export default Reminders;
