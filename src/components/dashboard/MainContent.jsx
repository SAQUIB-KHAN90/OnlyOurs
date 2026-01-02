import { useEffect, useState } from "react";
import Home from "./home/Home";
import Chat from "./chat/chat";
import Memories from "./memories/Memories";
import RageRoom from "./rage/RageRoom";
import Secrets from "./secrets/Secrets";



const MainContent = ({ activeSection, setSidebarOpen }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, [activeSection]);

  return (
    <main className="flex-1 px-6 py-4 overflow-y-auto">
      {/* MOBILE HEADER */}
      <div className="flex items-center gap-4 mb-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>

        <h2 className="font-heading text-xl text-primary capitalize">
          {activeSection}
        </h2>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        {activeSection === "home" && <Home />}
{activeSection === "chat" && <Chat />}
{activeSection === "memories" && <Memories />}
{activeSection === "rage" && <RageRoom />}
{activeSection === "secrets" && <Secrets />}

{!["home", "chat", "memories", "rage", "secrets"].includes(activeSection) && (
  <div>
    <h2 className="font-heading text-3xl text-primary capitalize">
      {activeSection}
    </h2>
    <p className="mt-2 text-textMuted">
      This section is coming soon.
    </p>
  </div>
)}




      </div>
    </main>
  );
};

export default MainContent;
