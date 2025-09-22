import bgInsideImg from "../../assets/banner-main.png";
import bgImg from "../../assets/bg-shadow.png";

const Hero = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-5">
      <div className="relative">
        <img className="bg-black rounded-lg " src={bgImg} alt="" />
      </div>
      <div className="absolute text-white top-35 right-250 space-y-8">
        <div>
          <img className="mx-auto" src={bgInsideImg} alt="" />
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-center">Beyond Boundaries Beyond Limits</p>
        </div>
        <div className="text-center">
          <button className="btn btn-active btn-secondary">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
