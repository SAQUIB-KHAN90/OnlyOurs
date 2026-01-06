import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    title: "That random laugh",
    date: "March 14",
  },
  {
    id: 2,
    title: "Late night talk",
    date: "April 2",
  },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
