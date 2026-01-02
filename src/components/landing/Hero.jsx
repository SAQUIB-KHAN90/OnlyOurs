import HeroText from "./HeroText";
import HeroActions from "./HeroActions";
import Heart3D from "./Heart3D";
import BackgroundHearts from "./BackgroundHearts";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <BackgroundHearts />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text + Actions */}
          <div className="space-y-8">
            <HeroText />
            <HeroActions />
          </div>

          {/* RIGHT: 3D Heart (placeholder for now) */}
          <Heart3D />


        </div>
      </div>
    </section>
  );
};

export default Hero;
