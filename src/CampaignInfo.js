import "./index.css";
const CampaignInfo = (props) => {
  return (
    <div className="camp_container">
      <div>{props.name}</div>
      <div>{props.game}</div>
      <div>{props.language}</div>
      <div> {props.budget}$</div>
      <div>{props.startDate}</div>
    </div>
  );
};
export default CampaignInfo;
