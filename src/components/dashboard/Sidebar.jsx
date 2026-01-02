import SidebarItem from "./SidebarItem";

const menuItems = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "chat", label: "Chat", icon: "💬" },
  { id: "memories", label: "Memories", icon: "📝" },
  { id: "songs", label: "Songs", icon: "🎵" },
  { id: "videos", label: "Videos", icon: "🎥" },
  { id: "rage", label: "Fights / Rage Room", icon: "😤" },
  { id: "secrets", label: "Secrets", icon: "🤫" },
  { id: "milestones", label: "Milestones", icon: "🏆" },
  { id: "goals", label: "Bucket List & Goals", icon: "🎯" },
  { id: "poetry", label: "Poetry", icon: "✍️" },
  { id: "pets", label: "Pets", icon: "🐾" },
  { id: "reminders", label: "Reminders", icon: "⏰" },
  { id: "customize", label: "Customize", icon: "🎨" },
  { id: "settings", label: "Settings", icon: "⚙️" },
  { id: "logout", label: "Logout", icon: "🚪" },
];

const Sidebar = ({
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      {/* OVERLAY (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-white/80 backdrop-blur border-r border-borderColor px-4 py-6
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <h1 className="font-heading text-2xl text-primary mb-8">
          OnlyOurs
        </h1>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              activeSection={activeSection}
              setActiveSection={(id) => {
                setActiveSection(id);
                setSidebarOpen(false); // 🔥 close on mobile click
              }}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
