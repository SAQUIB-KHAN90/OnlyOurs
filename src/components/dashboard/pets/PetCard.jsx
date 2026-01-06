const PetCard = ({ pet }) => {
  return (
    <div
      className="bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]"
    >
      {/* Image Placeholder */}
      <div className="h-40 bg-secondary/40 flex items-center justify-center">
        <span className="text-4xl">🐾</span>
      </div>

      {/* Info */}
      <div className="p-4 space-y-1">
        <h3 className="font-heading text-lg text-primary">
          {pet.name}
        </h3>
        <p className="text-xs text-textMuted">
          {pet.type}
        </p>
        <p className="text-sm text-textMuted mt-2">
          {pet.description}
        </p>
      </div>
    </div>
  );
};

export default PetCard;
