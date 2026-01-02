const SidebarItem = ({ item, activeSection, setActiveSection }) => {
  const isActive = activeSection === item.id;

  return (
    <button
      onClick={() => setActiveSection(item.id)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
      transition-all duration-200 ease-in-out
      ${
        isActive
          ? "bg-secondary/40 text-primary font-medium"
          : "text-textMuted hover:bg-secondary/20 hover:translate-x-1"
      }`}
    >
      <span className="transition-transform duration-200">
        {item.icon}
      </span>
      <span>{item.label}</span>
    </button>
  );
};

export default SidebarItem;
