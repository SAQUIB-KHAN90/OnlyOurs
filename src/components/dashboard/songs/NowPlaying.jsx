const NowPlaying = () => {
  return (
    <div
      className="bg-white/70 border border-borderColor rounded-2xl p-6
      flex items-center gap-6 transition-all duration-300 hover:shadow-lg"
    >
      {/* Album Art */}
      <div className="w-20 h-20 rounded-xl bg-secondary/40" />

      {/* Song Info */}
      <div className="flex-1">
        <h3 className="font-heading text-lg text-primary">Perfect</h3>
        <p className="text-sm text-textMuted">Ed Sheeran</p>
        <p className="text-xs text-textMuted mt-1">
          Playing for both of you 💗
        </p>
      </div>

      {/* Controls (UI only) */}
      <div className="flex gap-3 text-xl text-primary">⏮️ ⏯️ ⏭️</div>
    </div>
  );
};

export default NowPlaying;
