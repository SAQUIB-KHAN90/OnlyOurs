const SecretCard = ({ secret }) => {
  return (
    <div
      className="bg-secondary/20 border border-borderColor
      rounded-xl p-4 text-sm text-textMuted"
    >
      <p className="leading-relaxed">{secret.text}</p>
      <p className="mt-2 text-[10px] opacity-60">
        {secret.date}
      </p>
    </div>
  );
};

export default SecretCard;
