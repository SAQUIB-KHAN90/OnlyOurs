const hearts = Array.from({
  length: window.innerWidth < 640 ? 8 : 16,
});

const BackgroundHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((_, index) => {
        const left = Math.random() * 100;

        // 🔥 INCREASED SIZE
        const size = Math.random() * 24 + 28; // 28px – 52px

        // 🔥 SLOWER + MORE NOTICEABLE
        const duration = Math.random() * 18 + 22; // 22s – 40s
        const delay = Math.random() * 8;

        return (
          <span
            key={index}
            className="absolute bottom-[-15%] animate-float"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: 0.35, // 🔥 more visible but still soft
            }}
          >
            ❤️
          </span>
        );
      })}
    </div>
  );
};

export default BackgroundHearts;
