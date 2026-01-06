const SongCard = ({ song }) => {
  return (
    <div
      className="flex items-center justify-between
      bg-white/60 border border-borderColor rounded-xl px-4 py-3
      transition-all duration-200 hover:bg-secondary/30"
    >
      <div>
        <p className="font-medium text-primary">
          {song.title}
        </p>
        <p className="text-xs text-textMuted">
          {song.artist}
        </p>
      </div>

      <button className="text-primary text-lg">
        ▶️
      </button>
    </div>
  );
};

export default SongCard;
