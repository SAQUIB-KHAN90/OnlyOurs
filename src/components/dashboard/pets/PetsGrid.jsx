import PetCard from "./PetCard";

const pets = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    description: "Loves belly rubs and running around the house.",
  },
  {
    id: 2,
    name: "Milo",
    type: "Cat",
    description: "Sleeps all day and judges silently.",
  },
];

const PetsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetsGrid;
