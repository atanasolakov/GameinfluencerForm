import { useState } from "react";
import Campaign1 from "./Campaign1";
import Rendercampaign from "./Rendercampaign";

const INITIAL_DATA = [
  {
    id: "data1",
    name: "Tony Monatana Camp",
    description: "Guns n Drugs",
    game: "League of Legends",
    language: "Chinese",
    budget: "5000",
    crypto: "yes",
    startDate: "2021.02.03",
    endDate: "2022.02.05",
  },
  {
    id: "data2",
    name: "Tree Plant",
    description: "Planting Trees",
    game: "League of Legends",
    language: "German",
    budget: "8000",
    crypto: "yes",
    startDate: "2021.05.24",
    endDate: "2022.05.24",
  },
];
function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const addFormDataHandler = (data) => {
    setData((prevData) => {
      return [data, ...prevData];
    });
  };
  return (
    <div className="App">
      <h1>GameinfluencerForm</h1>
      <Campaign1 onAddData={addFormDataHandler}></Campaign1>
      <Rendercampaign items={data}></Rendercampaign>
    </div>
  );
}

export default App;
