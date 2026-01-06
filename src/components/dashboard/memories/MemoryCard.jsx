const MemoryCard = ({ memory }) => {
  return (
    <div className="className=
bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]
"
>

      {/* Optional Image */}
      {memory.image && (
        <div className="h-48 bg-secondary/40"></div>
      )}

      <div className="p-6 space-y-2">
        <h3 className="font-heading text-xl text-primary">
          {memory.title}
        </h3>

        <p className="text-xs text-textMuted">
          {memory.date}
        </p>

        <p className="text-sm text-textMuted leading-relaxed">
          {memory.description}
        </p>
      </div>
    </div>
  );
};

export default MemoryCard;

