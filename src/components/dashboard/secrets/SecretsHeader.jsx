const SecretsHeader = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">🔒</span>
      <div>
        <h2 className="font-heading text-2xl text-primary">
          Secrets
        </h2>
        <p className="text-xs text-textMuted">
          This space is private and unseen.
        </p>
      </div>
    </div>
  );
};

export default SecretsHeader;
