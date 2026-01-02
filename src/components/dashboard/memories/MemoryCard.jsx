const MemoryCard = ({ memory }) => {
  return (
    <div className="bg-white/70 border border-borderColor rounded-2xl overflow-hidden
    transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">

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

