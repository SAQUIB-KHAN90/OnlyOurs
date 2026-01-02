import InviteCode from "./InviteCode";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const navigate = useNavigate();

  const inviteCode = "ONLY-7429"; // temp

  const handleContinue = () => {
    localStorage.setItem("onlyours_room", inviteCode);
    navigate(`/room/${inviteCode}`);
  };

  return (
    <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-borderColor rounded-3xl shadow-2xl p-8 space-y-6 text-center">
      <h2 className="text-2xl font-heading text-primary">
        Room Created 💗
      </h2>

      <InviteCode code={inviteCode} />

      <button
        onClick={handleContinue}
        className="w-full py-3 rounded-xl bg-primary text-white"
      >
        Continue to Room
      </button>
    </div>
  );
};

export default CreateRoom;
