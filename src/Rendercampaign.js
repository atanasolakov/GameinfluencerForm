import React from "react";
import CampaignInfo from "./CampaignInfo";

const Rendercampaign = (props) => {
  return (
    <div>
      {props.items.map((data) => (
        <CampaignInfo
          key={data.id}
          name={data.name}
          game={data.game}
          description={data.description}
          budget={data.budget}
          language={data.language}
          startDate={data.startDate}
        ></CampaignInfo>
      ))}
    </div>
  );
};
export default Rendercampaign;
