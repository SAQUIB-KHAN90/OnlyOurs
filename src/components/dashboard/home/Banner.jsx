const Banner = () => {
  return (
  <div className="relative h-48 rounded-2xl overflow-hidden bg-secondary/40
transition-all duration-500 ease-out">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="absolute bottom-4 left-6 text-white">
        <h1 className="font-heading text-2xl">
          Ami & ❤️
        </h1>
        <p className="text-sm opacity-90">
          What’s ours, stays ours
        </p>
      </div>
    </div>
  );
};

export default Banner;
