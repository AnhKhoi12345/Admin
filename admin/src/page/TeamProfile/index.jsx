// import { useEffect } from "react";
import { teamList } from "../../database/TeamDatabase";
function TeamProfile() {
  //   let urlId = window.location.href.split("/").reverse()[0];

  const teamMember = teamList.includes((teamList) => {
    console.log(window.location.href.split("/").reverse()[0]);
    return teamList.id === window.location.href.split("/").reverse()[0];
  });
  //   console.log("teamMember" + teamMember[0].name.fullName);

  //   console.log(window.location.href.split("/").reverse()[0]);
  return (
    <div className="products__details">
      <div>{teamMember[0].name.fullName}</div>
      Hi
    </div>
  );
}
export default TeamProfile;
