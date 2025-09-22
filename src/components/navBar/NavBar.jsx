import navCoin from "../../assets/dollar-1.png";
import navImg from "../../assets/logo.png";
const NavBar = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-between">
      <div>
        <a className=" text-xl">
          <img src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span>60000000000000</span>
        <span>Coin</span>
        <img src={navCoin} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
