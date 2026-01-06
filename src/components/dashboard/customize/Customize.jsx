import CustomizeHeader from "./CustomizeHeader";
import NamesCard from "./NamesCard";
import RoomCard from "./RoomCard";
import ImagesCard from "./ImagesCard";

const Customize = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <CustomizeHeader />
      <NamesCard />
      <RoomCard />
      <ImagesCard />
    </div>
  );
};

export default Customize;
