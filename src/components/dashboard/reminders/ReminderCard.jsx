const toneMap = {
  romantic: "💗",
  cute: "✨",
  serious: "📌",
};

const ReminderCard = ({ reminder }) => {
  return (
    <div
      className="bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">
          {toneMap[reminder.tone]}
        </span>
        <div>
          <p className="text-sm text-primary">
            {reminder.title}
          </p>
          <p className="text-xs text-textMuted">
            {reminder.date}
          </p>
        </div>
      </div>

      <span className="text-xs text-textMuted capitalize">
        {reminder.tone}
      </span>
    </div>
  );
};

export default ReminderCard;
