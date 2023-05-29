import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "../../assets/AddTeam.scss";
import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import userApi from "../../api/userApi";
function EditTeam() {
  const id = window.location.href.split("/").reverse()[0];
  const [dialogVisible, setDialogVisible] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    study: "",
    work: "",
    description: "",
    facebook: "",
    twitter: "",
    youtube: "",
    image: "",
  });
  const [team, setTeam] = useState(null);
  useEffect(() => {
    const fetchTeamList = async () => {
      // await setTeam(userApi.getAll())
      const teamlist = await userApi.get(id);
      console.log(teamlist.user);
      setTeam(teamlist.user);
    };
    fetchTeamList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // for (const [key, value] of Object.entries(data)) {
    //   formData.append(key, value);
    // }
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("title", data.title);
    formData.append("study", data.study);
    formData.append("work", data.work);
    formData.append("youtube", data.youtube);
    formData.append("twitter", data.twitter);
    formData.append("facebook", data.facebook);
    formData.append("description", data.description);
    formData.append("image", data.image);
    console.log(formData);
    try {
      setDialogVisible(true);
      // userApi
      //   .add(formData)
      fetch("http://localhost:5000/user", {
        method: "POST",
        body: formData,
      })
        // axiosClient.post("/user", data)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setTimeout(navigate("/"), 8000);
        });
    } catch (error) {
      // console.log(formData.values.fullName);
      console.error(error.response.data);
    }
  };
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="create-profile-container">
      <h1>Create new team member</h1>
      <h2>Full name</h2>
      <InputText
        name="fullName"
        // keyfilter="alphanum"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        // onChange={(e) => setFullName(e.target.value)}
        value={data.fullName}
        required
      />
      <h2>Email</h2>
      <InputText
        name="email"
        keyfilter="email"
        className="add-team-input"
        // onChange={(e) => setEmail(e.target.value)}
        onChange={handleInput}
        value={data.email}
        required
      />
      <h2>Phone</h2>
      <InputText
        name="phone"
        keyfilter="pnum"
        className="add-team-input"
        // onChange={(e) => setPhone(e.target.value)}
        onChange={handleInput}
        value={data.phone}
        required
      />
      <h2>Title</h2>
      <InputText
        name="title"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        // onChange={(e) => setTitle(e.target.value)}
        onChange={handleInput}
        value={data.title}
        required
      />
      <h2>Studied at</h2>
      <InputText
        name="study"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        // onChange={(e) => setStudy(e.target.value)}
        onChange={handleInput}
        value={data.study}
        required
      />
      <h2>Currently work in</h2>
      <InputText
        name="work"
        keyfilter="alpha"
        className="add-team-input"
        // onChange={(e) => setWork(e.target.value)}
        onChange={handleInput}
        value={data.work}
      />
      <h2 className="social-media-fields">Social media:</h2>
      <h4>Youtube link</h4>
      <InputText
        name="youtube"
        className="add-team-input"
        // onChange={(e) => setYoutube(e.target.value)}
        onChange={handleInput}
        value={data.youtube}
      />
      <h4>Facebook link</h4>
      <InputText
        name="facebook"
        className="add-team-input"
        // onChange={(e) => setFacebook(e.target.value)}
        onChange={handleInput}
        value={data.facebook}
      />
      <h4>Twitter link</h4>
      <InputText
        name="twitter"
        className="add-team-input"
        // onChange={(e) => setTwitter(e.target.value)}
        onChange={handleInput}
        value={data.twitter}
        required
      />
      <h2>Description</h2>
      <InputTextarea
        name="description"
        className="add-team-input"
        value={data.description}
        // onChange={(e) => setDescription(e.target.value)}
        onChange={handleInput}
        rows={5}
        cols={30}
      />

      {/* <input type="file" name="file" onChange={uploadHandler} /> */}
      <Button
        label="Submit"
        type="button"
        //   icon="pi pi-times"
        className="p-button-rounded  ml-auto submit-button"
        onClick={handleSubmit}
        // onClick={testFunc}
        //   onClick={() => onTemplateRemove(file, props.onRemove)}
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
