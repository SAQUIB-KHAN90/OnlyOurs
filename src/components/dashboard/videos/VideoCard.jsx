const VideoCard = ({ video }) => {
  return (
    <div
      className="bg-white/70 border border-borderColor rounded-2xl overflow-hidden
      transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Video Thumbnail Placeholder */}
      <div className="h-40 bg-secondary/40 flex items-center justify-center">
        <span className="text-3xl">▶️</span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading text-lg text-primary">
          {video.title}
        </h3>
        <p className="text-xs text-textMuted">
          {video.date}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
