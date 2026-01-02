const SecretsEditor = () => {
  return (
    <div className="bg-white/60 border border-borderColor rounded-2xl p-5">
      <textarea
        rows={6}
        placeholder="Write something you can’t say out loud…"
        className="w-full resize-none bg-transparent
        outline-none text-sm leading-relaxed"
      />

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 rounded-full bg-primary
          text-white text-sm">
          Save Secret
        </button>
      </div>
    </div>
  );
};

export default SecretsEditor;
