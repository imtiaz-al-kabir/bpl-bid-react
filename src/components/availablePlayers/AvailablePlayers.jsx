import { use } from "react";

import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({
  promisePlayers,
  setAvailableBalance,
  availableBalance,
  setPurchasePlayers,
  purchasePlayers,
}) => {
  const availablePlayers = use(promisePlayers);

  return (
    <div className="max-w-[1280px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 object-cover gap-5 ">
      {availablePlayers.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasePlayers={purchasePlayers}
          setPurchasePlayers={setPurchasePlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
