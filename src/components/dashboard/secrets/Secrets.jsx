import SecretsHeader from "./SecretsHeader";
import SecretsEditor from "./SecretsEditor";
import SecretsList from "./SecretsList";

const Secrets = () => {
  return (
    <div className="space-y-6">
      <SecretsHeader />
      <SecretsEditor />
      <SecretsList />
    </div>
  );
};

export default Secrets;
