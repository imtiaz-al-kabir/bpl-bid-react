import { use } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/report 1.png";

const AvailablePlayers = ({ promisePlayers }) => {
  const availablePlayers = use(promisePlayers);
  console.log(availablePlayers);

  return (
    <div className="max-w-[1280px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 object-cover gap-5 ">
      {availablePlayers.map((player) => (
        <div className="card bg-base-100  shadow-sm p-4">
          <figure>
            <img
              className="w-full h-[300px]"
              src={player.image_url}
              alt="Shoes"
            />
          </figure>
          <div className="py-3">
            <div className="flex gap-2 items-center">
              <img src={userImg} alt="" />
              <h2 className="card-title text-xl font-semibold">
                {player.name}
              </h2>
            </div>
            <div className="flex justify-between py-3 border-b-1 border-gray-300">
              <div className="flex gap-2 items-center">
                <img src={flagImg} alt="" />
                <h2 className="card-title text-[#898989]">{player.country}</h2>
              </div>
              <button className="btn">{player.role}</button>
            </div>

            <div className="flex justify-between py-3">
              <span className="font-bold">Rating</span>
              <span className="font-bold">{player.rating}</span>
            </div>
            <div className="flex justify-between">
              <h1 className="font-semibold">{player.batting_style}</h1>
              <h2 className="text-[#5a5a5a]">{player.batting_style}</h2>
            </div>

            <div className="card-actions flex justify-between py-3">
              <p className="font-semibold">Price : ${player.price}</p>
              <button className="btn btn-xs py-4 text-[14px]">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
