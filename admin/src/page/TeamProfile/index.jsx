import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
// import { teamList } from "../../database/TeamDatabase";
import "../../assets/TeamProfile.scss";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Image } from "primereact/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faFileLines,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import userApi from "../../api/userApi";
function TeamProfile({ checked }) {
  const [teamMember, setTeam] = useState(null);
  useEffect(() => {
    const fetchTeamList = async () => {
      // await setTeam(userApi.getAll())
      const teamlist = await userApi.get(
        window.location.href.split("/").reverse()[0]
      );
      console.log(teamlist.user);
      setTeam(teamlist.user);
    };
    fetchTeamList();
    bg.current.style.background = `url(http://localhost:5000/uploads/${teamMember?.image}) no-repeat top`;
    bg.current.style.backgroundSize = "cover";

    if (checked) {
      profile.current.classList.remove("profile-long");
      profile.current.classList.add("profile-short");
    } else {
      profile.current.classList.add("profile-long");
      profile.current.classList.remove("profile-short");
    }
  }, [checked, teamMember?.image]);
  const bg = useRef(null);
  const profile = useRef(null);
  // const param = window.location.href.split("/").reverse()[0];
  // let teamMember;
  // for (let i = 0; i < team.length; i++) {
  //   if (team[i].id === +param) {
  //     teamMember = team[i];
  //   }
  // }
  return (
    <div className="team-profile" ref={profile}>
      <div className="profile-header">
        <div className="profile-header-background" ref={bg}>
          <div className="profile-header-background-text">
            <h3 className="name">{teamMember?.fullName}</h3>
            <p className="title">{teamMember?.title}</p>
          </div>
        </div>
        <div className="profile-header-button-container">
          <div className="profile-header-button">
            <Button label="Follow" className="follow"></Button>
            <Button
              label="Edit"
              className="edit hover:bg-bluegray-400"
            ></Button>
          </div>
        </div>
        <div className="profile-header-picture card flex ">
          <Image
            src={`http://localhost:5000/uploads/${teamMember?.image}`}
            alt="Image"
            width="140"
            height="120"
            preview
          />
        </div>
      </div>
      <div className="about-container">
        <h3>About</h3>
        <p>{teamMember?.description}</p>
      </div>
      <div className="info-container">
        <h3>Info</h3>
        <p className="study">
          <FontAwesomeIcon
            icon={faFileLines}
            className="study-icon"
            size="lg "
          />
          Studied at {teamMember?.study}
        </p>

        <p className="work">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="work-icon"
            size="lg "
          />
          {teamMember?.title} at {teamMember?.work}
        </p>
      </div>
      <div className="contact-container">
        <h3>Contacts</h3>
        <p className="mail contact">
          <FontAwesomeIcon icon={faEnvelope} className="facebook-i" size="lg" />
          <p>{teamMember?.email}</p>
        </p>
        <p className="phone-number contact">
          <FontAwesomeIcon icon={faPhone} className="facebook-i" size="lg" />
          <p>{teamMember?.phone}</p>
        </p>
      </div>
      <div className="social-media-container">
        <h3>Social Medias</h3>
        <p className="facebook platform">
          <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
          <p>{teamMember?.socialMedia.facebook}</p>
        </p>
        <p className="twitter platform">
          <FontAwesomeIcon icon={faTwitter} className="facebook-i" size="lg" />
          <p>{teamMember?.socialMedia.twitter}</p>
        </p>
        <p className="youtube platform">
          <FontAwesomeIcon icon={faYoutube} className="facebook-i" size="lg" />
          <p>{teamMember?.socialMedia.youtube}</p>
        </p>
      </div>
    </div>
  );
}
export default TeamProfile;
