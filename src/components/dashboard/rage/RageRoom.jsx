import RageHeader from "./RageHeader";
import RageMessages from "./RageMessages";
import RageInput from "./RageInput";
import RageActions from "./RageActions";

const RageRoom = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)]
    bg-white/60 border border-borderColor rounded-2xl overflow-hidden">

      <RageHeader />
      <RageMessages />
      <RageInput />
      <RageActions />
    </div>
  );
};

export default RageRoom;
