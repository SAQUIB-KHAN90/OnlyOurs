import { useNavigate } from "react-router-dom";

const HeroActions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => navigate("/auth", { state: { intent: "login" } })}
        className="px-8 py-4 rounded-full bg-primary text-white font-body text-lg shadow-lg hover:scale-105 transition"
      >
        Login
      </button>

      <button
        onClick={() => navigate("/auth", { state: { intent: "signup" } })}
        className="px-8 py-4 rounded-full border border-borderColor text-primary font-body text-lg hover:bg-secondary/20 transition"
      >
        Signup
      </button>
    </div>
  );
};

export default HeroActions;
