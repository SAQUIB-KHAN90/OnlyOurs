import { useEffect, useState } from "react";
import Home from "./home/Home";
import Chat from "./chat/chat";
import Memories from "./memories/Memories";
import RageRoom from "./rage/RageRoom";
import Secrets from "./secrets/Secrets";
import Songs from "./songs/Songs";
import Videos from "./videos/Videos";
import Milestones from "./milestones/Milestones";
import Goals from "./goals/Goals";
import Poetry from "./poetry/Poetry";
import Pets from "./pets/Pets";
import Reminders from "./reminders/Reminders";
import Customize from "./customize/Customize";
import Settings from "./settings/Settings";







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
        <button onClick={() => setSidebarOpen(true)} className="text-2xl">
          ☰
        </button>

        <h2 className="font-heading text-xl text-primary capitalize">
          {activeSection}
        </h2>
      </div>

      <div
        className={`transition-all duration-250 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
      >
   {activeSection === "home" && <Home />}
{activeSection === "chat" && <Chat />}
{activeSection === "memories" && <Memories />}
{activeSection === "rage" && <RageRoom />}
{activeSection === "secrets" && <Secrets />}
{activeSection === "songs" && <Songs />}
{activeSection === "videos" && <Videos />}
{activeSection === "milestones" && <Milestones />}
{activeSection === "goals" && <Goals />}
{activeSection === "poetry" && <Poetry />}
{activeSection === "pets" && <Pets />}
{activeSection === "reminders" && <Reminders />}
{activeSection === "customize" && <Customize />}
{activeSection === "settings" && <Settings />}

{![
  "home","chat","memories","rage","secrets","songs","videos",
  "milestones","goals","poetry","pets","reminders","customize","settings"
].includes(activeSection) && (
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
