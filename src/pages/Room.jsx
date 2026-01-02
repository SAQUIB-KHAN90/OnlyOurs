import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <h1 className="text-3xl font-heading text-primary">
        OnlyOurs Room 💗 {roomId}
      </h1>
    </main>
  );
};

export default Room;
