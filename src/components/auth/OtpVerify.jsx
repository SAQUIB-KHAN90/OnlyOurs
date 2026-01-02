import { useNavigate } from "react-router-dom";

const OtpVerify = ({ authData }) => {
  const navigate = useNavigate();

 const handleVerify = () => {
  // Simulate login time
  localStorage.setItem("onlyours_login_time", Date.now());

  const room = localStorage.getItem("onlyours_room");

  if (room) {
    // User already has a room
    navigate(`/room/${room}`);
  } else {
    // First-time user
    navigate("/room-gate");
  }
};

  return (
    <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-borderColor rounded-3xl shadow-2xl p-8 space-y-6">
      <h2 className="text-2xl font-heading text-primary text-center">
        Verify OTP
      </h2>

      <p className="text-center text-textMuted text-sm">
        Enter the 6-digit code sent via {authData.method}
      </p>

      <input
        type="text"
        maxLength={6}
        placeholder="••••••"
        className="w-full text-center tracking-widest text-xl px-4 py-3 rounded-xl border border-borderColor outline-none"
      />

      <button
        onClick={handleVerify}
        className="w-full py-3 rounded-xl bg-primary text-white"
      >
        Verify
      </button>
    </div>
  );
};

export default OtpVerify;
