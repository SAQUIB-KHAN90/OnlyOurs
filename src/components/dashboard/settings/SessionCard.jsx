const SessionCard = () => {
  return (
    <div className="bg-white/70 border border-borderColor rounded-2xl p-6">
      <h3 className="font-heading text-lg text-primary mb-4">
        Session
      </h3>

      <p className="text-sm text-textMuted">
        You will stay logged in for up to <strong>48 hours</strong>
        for a seamless experience.
      </p>
    </div>
  );
};

export default SessionCard;
