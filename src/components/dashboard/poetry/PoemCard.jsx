const PoemCard = ({ poem }) => {
  return (
    <div
      className="bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]"
    >
      {poem.title && (
        <h3 className="font-heading text-xl text-primary mb-3">
          {poem.title}
        </h3>
      )}

      <p className="whitespace-pre-line text-sm text-textMuted leading-relaxed">
        {poem.content}
      </p>

      <p className="mt-4 text-xs text-textMuted opacity-60">
        {poem.date}
      </p>
    </div>
  );
};

export default PoemCard;
