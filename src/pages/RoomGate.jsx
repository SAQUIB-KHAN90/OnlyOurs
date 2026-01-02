import { useState } from "react";
import CreateRoom from "../components/room/CreateRoom";
import JoinRoom from "../components/room/JoinRoom";

const RoomGate = () => {
  const [mode, setMode] = useState(null); // create | join

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      {!mode && (
        <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-borderColor rounded-3xl shadow-2xl p-8 space-y-6 text-center">
          <h1 className="text-3xl font-heading text-primary">
            Your private space
          </h1>

          <p className="text-textMuted text-sm">
            Create a room for your relationship or join one using an invite code.
          </p>

          <button
            onClick={() => setMode("create")}
            className="w-full py-3 rounded-xl bg-primary text-white"
          >
            Create a Room
          </button>

          <button
            onClick={() => setMode("join")}
            className="w-full py-3 rounded-xl border border-borderColor text-primary"
          >
            Join with Invite Code
          </button>
        </div>
      )}

      {mode === "create" && <CreateRoom />}
      {mode === "join" && <JoinRoom />}
    </main>
  );
};

export default RoomGate;
