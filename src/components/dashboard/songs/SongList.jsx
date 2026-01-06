import SongCard from "./SongCard";

const songs = [
  {
    id: 1,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
  },
  {
    id: 2,
    title: "Yellow",
    artist: "Coldplay",
  },
];

const SongList = () => {
  return (
    <div className="space-y-3">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
