import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "../../assets/EditTeam.scss";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import userApi from "../../api/userApi";
import axiosClient from "../../api/axiosClient";
import { Divider } from "primereact/divider";
function EditTeam({ checked }) {
  const id = window.location.href.split("/").reverse()[1];
  const [dialogVisible, setDialogVisible] = useState(false);
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  useEffect(() => {
    const fetchTeamList = async () => {
      const teamlist = await userApi.get(id);
      console.log(teamlist.user);
      setTeam(teamlist.user);
    };
    fetchTeamList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (checked) {
      container.current.classList.remove("profile-long");
      container.current.classList.add("profile-short");
    } else {
      container.current.classList.add("profile-long");
      container.current.classList.remove("profile-short");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  const container = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setDialogVisible(true);
      // userApi
      //   .update(team)

      // fetch(`http://localhost:5000/user/${team._id}`, {
      //   method: "PUT",
      //   body: team,
      // })
      axiosClient
        .put(`http://localhost:5000/user/${team._id}`, team)
        .then((response) => {
          console.log(response);
          setTimeout(navigate("/"), 8000);
        });
    } catch (error) {
      console.error(error.response.data);
    }
  };
  const handleInput = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };
  const handleSocialMediaInput = (e) => {
    let socialMedia = { ...team };
    if (e.target.name === "facebook") {
      socialMedia.socialMedia.facebook = e.target.value;
    } else if (e.target.name === "twitter") {
      socialMedia.socialMedia.twitter = e.target.value;
    } else if (e.target.name === "youtube") {
      socialMedia.socialMedia.youtube = e.target.value;
    }
    setTeam((team.socialMedia = socialMedia));
  };
  return (
    <div className="edit-profile-container" ref={container}>
      <h1>Edit user</h1>
      <h2>Full name</h2>
      <InputText
        name="fullName"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        value={team?.fullName}
        required
      />
      <h2>Email</h2>
      <InputText
        name="email"
        keyfilter="email"
        className="add-team-input"
        onChange={handleInput}
        value={team?.email}
        required
      />
      <h2>Phone</h2>
      <InputText
        name="phone"
        keyfilter="pnum"
        className="add-team-input"
        onChange={handleInput}
        value={team?.phone}
        required
      />
      <h2>Title</h2>
      <InputText
        name="title"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        value={team?.title}
        required
      />
      <h2>Studied at</h2>
      <InputText
        name="study"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        value={team?.study}
        required
      />
      <h2>Currently work in</h2>
      <InputText
        name="work"
        keyfilter="alpha"
        className="add-team-input"
        onChange={handleInput}
        value={team?.work}
      />
      <h2 className="social-media-fields">Social media:</h2>
      <h4>Youtube link</h4>
      <InputText
        name="youtube"
        className="add-team-input"
        onChange={handleSocialMediaInput}
        value={team?.socialMedia.youtube}
      />
      <h4>Facebook link</h4>
      <InputText
        name="facebook"
        className="add-team-input"
        onChange={handleSocialMediaInput}
        value={team?.socialMedia.facebook}
      />
      <h4>Twitter link</h4>
      <InputText
        name="twitter"
        className="add-team-input"
        onChange={handleSocialMediaInput}
        value={team?.socialMedia.twitter}
        required
      />
      <h2>Description</h2>
      <InputTextarea
        name="description"
        className="add-team-input"
        value={team?.description}
        onChange={handleInput}
        rows={5}
        cols={30}
      />
      <Divider />
      <Button
        label="Submit"
        type="button"
        className="p-button-rounded  submit-button"
        onClick={handleSubmit}
      />
      <Dialog
        header="User created successful!"
        visible={dialogVisible}
        style={{ width: "50vw" }}
        onHide={() => setDialogVisible(false)}
      >
        <h1 className="m-0">Returning to datatable...</h1>
      </Dialog>
    </div>
  );
}
export default EditTeam;
