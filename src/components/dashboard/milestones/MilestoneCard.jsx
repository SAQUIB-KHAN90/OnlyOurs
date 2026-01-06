const MilestoneCard = ({ milestone }) => {
  return (
    <div className="relative">
      {/* Dot */}
      <div className="absolute -left-[18px] top-2 w-3 h-3 rounded-full bg-primary" />

      <div
        className="bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]"
      >
        {/* Optional Image */}
        {milestone.image && (
          <div className="h-40 bg-secondary/40 rounded-xl mb-4" />
        )}

        <h3 className="font-heading text-xl text-primary">
          {milestone.title}
        </h3>

        <p className="text-xs text-textMuted mt-1">
          {milestone.date}
        </p>

        <p className="text-sm text-textMuted mt-3 leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
};

export default MilestoneCard;
