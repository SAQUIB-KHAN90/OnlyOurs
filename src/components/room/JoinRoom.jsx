import { useNavigate } from "react-router-dom";
import { useState } from "react";

const JoinRoom = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleJoin = () => {
    if (!code) return;
    localStorage.setItem("onlyours_room", code);
    navigate(`/room/${code}`);
  };

  return (
    <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-borderColor rounded-3xl shadow-2xl p-8 space-y-6 text-center">
      <h2 className="text-2xl font-heading text-primary">
        Join a Room
      </h2>

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter invite code"
        className="w-full px-4 py-3 rounded-xl border border-borderColor text-center tracking-widest outline-none"
      />

      <button
        onClick={handleJoin}
        className="w-full py-3 rounded-xl bg-primary text-white"
      >
        Join Room
      </button>
    </div>
  );
};

export default JoinRoom;
