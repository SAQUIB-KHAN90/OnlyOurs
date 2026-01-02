import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import RoomGate from "./pages/RoomGate";
import Room from "./pages/Room";
import Dashboard from "./pages/Dashboard";

const App = () => {
  useEffect(() => {
    const loginTime = localStorage.getItem("onlyours_login_time");
    if (!loginTime) return;

    const diff = Date.now() - Number(loginTime);
    const hours = diff / (1000 * 60 * 60);

    if (hours > 48) {
      localStorage.clear();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/room-gate" element={<RoomGate />} />
      <Route path="/room/:roomId" element={<Room />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
};

export default App;
