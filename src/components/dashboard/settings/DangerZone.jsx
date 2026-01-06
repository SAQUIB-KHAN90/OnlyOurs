const DangerZone = () => {
  return (
    <div className="bg-secondary/20 border border-borderColor rounded-2xl p-6">
      <h3 className="font-heading text-lg text-primary mb-4">
        Danger Zone
      </h3>

      <button className="px-5 py-2 rounded-full border border-borderColor text-sm text-primary hover:bg-secondary/30">
        Logout
      </button>
    </div>
  );
};

export default DangerZone;
