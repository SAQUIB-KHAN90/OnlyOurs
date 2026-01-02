const MemoryPreview = () => {
  return (
    <div>
      <h3 className="font-heading text-lg text-primary mb-3">
        Recent Memories
      </h3>

      <div className="grid grid-cols-3 gap-3">
        <div className="h-24 rounded-xl bg-secondary/40" />
        <div className="h-24 rounded-xl bg-secondary/40" />
        <div className="h-24 rounded-xl bg-secondary/40" />
      </div>
    </div>
  );
};

export default MemoryPreview;
