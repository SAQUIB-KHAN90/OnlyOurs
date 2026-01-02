const RageInput = () => {
  return (
    <div className="px-4 py-3 border-t border-borderColor bg-white/70">
      <textarea
        rows={3}
        placeholder="Write what you’re feeling… no filters."
        className="w-full resize-none px-4 py-2 rounded-xl
        border border-borderColor outline-none text-sm"
      />
    </div>
  );
};

export default RageInput;
