import SecretCard from "./SecretCard";

const secrets = [
  {
    id: 1,
    text: "Sometimes I act strong, but I miss you more than I admit.",
    date: "April 10",
  },
];

const SecretsList = () => {
  return (
    <div className="space-y-4">
      {secrets.map((secret) => (
        <SecretCard key={secret.id} secret={secret} />
      ))}
    </div>
  );
};

export default SecretsList;
