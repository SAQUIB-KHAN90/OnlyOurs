import SongsHeader from "./SongsHeader";
import NowPlaying from "./NowPlaying";
import SongList from "./SongList";
import AddSongButton from "./AddSongButton";

const Songs = () => {
  return (
    <div className="space-y-6">
      <SongsHeader />
      <NowPlaying />
      <AddSongButton />
      <SongList />
    </div>
  );
};

export default Songs;
