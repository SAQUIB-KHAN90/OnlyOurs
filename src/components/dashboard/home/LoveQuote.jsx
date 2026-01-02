const LoveQuote = () => {
  return (
    <div className="bg-white/70 border border-borderColor rounded-2xl p-6">
      <p className="italic text-textMuted">
        “In all the world, there is no heart for me like yours.”
      </p>

      <button className="mt-4 text-sm text-primary underline">
        Refresh quote
      </button>
    </div>
  );
};

export default LoveQuote;
