import SelectedCard from "../selectedCard/SelectedCard";

const SelectedPlayers = ({ purchasePlayers }) => {
  console.log(purchasePlayers);
  // purchasePlayers.map(player=>)
  return (
    <div className="max-w-[1280px] mx-auto">
      {purchasePlayers.map((player) => (
        <SelectedCard player={player} />
      ))}
    </div>
  );
};

export default SelectedPlayers;
