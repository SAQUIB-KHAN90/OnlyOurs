import SettingsHeader from "./SettingsHeader";
import AccountCard from "./AccountCard";
import PrivacyCard from "./PrivacyCard";
import SessionCard from "./SessionCard";
import DangerZone from "./DangerZone";

const Settings = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <SettingsHeader />
      <AccountCard />
      <PrivacyCard />
      <SessionCard />
      <DangerZone />
    </div>
  );
};

export default Settings;
