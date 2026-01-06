import VideosHeader from "./VideosHeader";
import AddVideoButton from "./AddVideoButton";
import VideoGrid from "./VideoGrid";

const Videos = () => {
  return (
    <div className="space-y-6">
      <VideosHeader />
      <AddVideoButton />
      <VideoGrid />
    </div>
  );
};

export default Videos;
