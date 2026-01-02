const Nicknames = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white/70 border border-borderColor rounded-2xl p-5">
        <h4 className="font-heading text-primary">Your name for them</h4>
        <p className="text-textMuted mt-2">My Sunshine ☀️</p>
      </div>

      <div className="bg-white/70 border border-borderColor rounded-2xl p-5">
        <h4 className="font-heading text-primary">Their name for you</h4>
        <p className="text-textMuted mt-2">My Home 🏡</p>
      </div>
    </div>
  );
};

export default Nicknames;
