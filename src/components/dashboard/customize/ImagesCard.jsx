const ImagesCard = () => {
  return (
    <div
      className="
bg-white/70 border border-borderColor rounded-2xl p-6
soft-transition hover:shadow-lg hover:-translate-y-[2px]
active:scale-[0.98]
"

    >
      <h3 className="font-heading text-lg text-primary mb-4">
        Images
      </h3>

      <div className="space-y-3">
        <button className="w-full px-4 py-2 rounded-xl border border-borderColor text-sm text-textMuted hover:bg-secondary/20">
          Upload Banner Image
        </button>

        <button className="w-full px-4 py-2 rounded-xl border border-borderColor text-sm text-textMuted hover:bg-secondary/20">
          Upload Profile Images
        </button>
      </div>
    </div>
  );
};

export default ImagesCard;
