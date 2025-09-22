import deleteIcon from "../../assets/Frame.png";
const SelectedCard = ({ player }) => {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-between items-center border border-gray-200 rounded-xl p-4 mt-8">
      <div className="flex gap-2 items-center">
        <img className="w-20 rounded-xl" src={player.image_url} alt="" />
        <div>
          <h1 className="pb-1 font-bold">{player.name}</h1>
          <p>{player.batting_style}</p>
        </div>
      </div>
      <div>
        <img src={deleteIcon} alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
