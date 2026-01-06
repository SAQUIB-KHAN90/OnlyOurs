const AccountCard = () => {
  return (
    <div className="bg-white/70 border border-borderColor rounded-2xl p-6">
      <h3 className="font-heading text-lg text-primary mb-4">
        Account
      </h3>

      <div className="space-y-3">
        <p className="text-sm text-textMuted">
          Signed in with: <strong>email@example.com</strong>
        </p>

        <button className="px-4 py-2 rounded-xl border border-borderColor text-sm text-textMuted hover:bg-secondary/20">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
