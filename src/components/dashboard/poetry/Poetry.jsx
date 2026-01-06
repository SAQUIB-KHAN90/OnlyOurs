import PoetryHeader from "./PoetryHeader";
import AddPoemButton from "./AddPoemButton";
import PoemsList from "./PoemsList";

const Poetry = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <PoetryHeader />
      <AddPoemButton />
      <PoemsList />
    </div>
  );
};

export default Poetry;
