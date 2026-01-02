import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />
  );
};

export default Dashboard;
