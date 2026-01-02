const RageActions = () => {
  return (
    <div className="px-4 py-3 flex justify-between items-center
    border-t border-borderColor bg-white/60">

      <p className="text-xs text-textMuted">
        Messages here can be cleared after cooling down.
      </p>

      <button
        className="px-4 py-1.5 rounded-full text-sm
        border border-borderColor text-textMuted hover:bg-secondary/20">
        Clear Room
      </button>
    </div>
  );
};

export default RageActions;
 