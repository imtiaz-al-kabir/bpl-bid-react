import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";

function App() {
  const [toggle, setToggle] = useState(false);

  const fetchPlayes = async () => {
    const res = await fetch("/players.json");
    return res.json();
  };
  const promisePlayers = fetchPlayes();
  return (
    <>
      <NavBar />
      <Hero />
      <div className="max-w-[1280px] mx-auto mt-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Available palyer</h1>
        <div>
          <button className="border-1 border-gray-200 py-3 px-4 rounded-l-2xl border-r-0 bg-[#e7fe29] cursor-pointer ">
            Available
          </button>
          <button className="border-1 border-gray-200 py-3 px-4 rounded-r-2xl border-l-0 cursor-pointer ">
            selected <span>{0}</span>
          </button>
        </div>
      </div>

{
  toggle===true?
}
      <Suspense
        fallback={
          <span className="loading loading-spinner text-error text-center"></span>
        }
      >
        <AvailablePlayers promisePlayers={promisePlayers} />
      </Suspense>

      <SelectedPlayers />
    </>
  );
}

export default App;
