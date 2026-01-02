import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const DashboardLayout = ({
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
   <div className="min-h-screen flex bg-background animate-fadeIn">

      {/* SIDEBAR */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <MainContent
        activeSection={activeSection}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
};

export default DashboardLayout;
