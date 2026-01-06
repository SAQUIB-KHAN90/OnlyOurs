const NamesCard = () => {
  return (
    <div
      className="
bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]
"

    >
      <h3 className="font-heading text-lg text-primary mb-4">
        Names & Nicknames
      </h3>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-xl border border-borderColor outline-none text-sm"
        />
        <input
          type="text"
          placeholder="Partner’s name"
          className="w-full px-4 py-2 rounded-xl border border-borderColor outline-none text-sm"
        />
        <input
          type="text"
          placeholder="Your nickname for them"
          className="w-full px-4 py-2 rounded-xl border border-borderColor outline-none text-sm"
        />
        <input
          type="text"
          placeholder="Their nickname for you"
          className="w-full px-4 py-2 rounded-xl border border-borderColor outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default NamesCard;
