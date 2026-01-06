import ReminderCard from "./ReminderCard";

const reminders = [
  {
    id: 1,
    title: "Anniversary dinner 💗",
    date: "Tomorrow • 8:00 PM",
    tone: "romantic",
  },
  {
    id: 2,
    title: "Call before sleep",
    date: "Everyday • 11:30 PM",
    tone: "cute",
  },
];

const RemindersList = () => {
  return (
    <div className="space-y-4">
      {reminders.map((reminder) => (
        <ReminderCard key={reminder.id} reminder={reminder} />
      ))}
    </div>
  );
};

export default RemindersList;
