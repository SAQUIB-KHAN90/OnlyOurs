const RoomCard = () => {
  return (
    <div
      className="
bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]
"

    >
      <h3 className="font-heading text-lg text-primary mb-4">
        Room Details
      </h3>

      <input
        type="text"
        placeholder="Room name (e.g. OnlyOurs 💗)"
        className="w-full px-4 py-2 rounded-xl border border-borderColor outline-none text-sm"
      />
    </div>
  );
};

export default RoomCard;
