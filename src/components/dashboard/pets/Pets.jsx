import PetsHeader from "./PetsHeader";
import AddPetButton from "./AddPetButton";
import PetsGrid from "./PetsGrid";

const Pets = () => {
  return (
    <div className="space-y-6">
      <PetsHeader />
      <AddPetButton />
      <PetsGrid />
    </div>
  );
};

export default Pets;
