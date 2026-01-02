import Banner from "./Banner";
import TimeTogether from "./TimeTogether";
import LoveQuote from "./LoveQuote";
import Nicknames from "./Nicknames";
import MemoryPreview from "./MemoryPreview";
import RemindersPreview from "./RemindersPreview";

const Home = () => {
  return (
    <main className="flex-1 px-8 py-6 space-y-8 overflow-y-auto">
      <Banner />
      <TimeTogether />
      <LoveQuote />
      <Nicknames />
      <MemoryPreview />
      <RemindersPreview />
    </main>
  );
};

export default Home;
