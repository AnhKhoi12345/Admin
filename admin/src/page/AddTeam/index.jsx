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
function AddTeam({ checked }) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);
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
  const onTemplateSelect = (e) => {
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e) => {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
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
      console.error(error.response.data);
    }
  };
  const uploadHandler = (
    // e
    // ,
    { files }
  ) => {
    // const [file] = files;
    setData({ ...data, image: files[0] });
    console.log(files);
    // setData({ ...data, image: e.target.files[0] });
  };
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const container = useRef(null);
  useEffect(() => {
    if (checked) {
      container.current.classList.remove("profile-long");
      container.current.classList.add("profile-short");
    } else {
      container.current.classList.add("profile-long");
      container.current.classList.remove("profile-short");
    }
  }, [checked]);
  return (
    <div className="create-profile-container" ref={container}>
      <h1>Create new team member</h1>
      <h2>Full name</h2>
      <InputText
        name="fullName"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        value={data.fullName}
        required
      />
      <h2>Email</h2>
      <InputText
        name="email"
        keyfilter="email"
        className="add-team-input"
        onChange={handleInput}
        value={data.email}
        required
      />
      <h2>Phone</h2>
      <InputText
        name="phone"
        keyfilter="pnum"
        className="add-team-input"
        onChange={handleInput}
        value={data.phone}
        required
      />
      <h2>Title</h2>
      <InputText
        name="title"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        value={data.title}
        required
      />
      <h2>Studied at</h2>
      <InputText
        name="study"
        keyfilter={/[a-z A-Z]/}
        className="add-team-input"
        onChange={handleInput}
        value={data.study}
        required
      />
      <h2>Currently work in</h2>
      <InputText
        name="work"
        keyfilter="alpha"
        className="add-team-input"
        onChange={handleInput}
        value={data.work}
      />
      <h2 className="social-media-fields">Social media:</h2>
      <h4>Youtube link</h4>
      <InputText
        name="youtube"
        className="add-team-input"
        onChange={handleInput}
        value={data.youtube}
      />
      <h4>Facebook link</h4>
      <InputText
        name="facebook"
        className="add-team-input"
        onChange={handleInput}
        value={data.facebook}
      />
      <h4>Twitter link</h4>
      <InputText
        name="twitter"
        className="add-team-input"
        onChange={handleInput}
        value={data.twitter}
        required
      />
      <h2>Description</h2>
      <InputTextarea
        name="description"
        className="add-team-input"
        value={data.description}
        onChange={handleInput}
        rows={5}
        cols={30}
      />
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <FileUpload
        type="file"
        ref={fileUploadRef}
        name="image"
        accept="image/*"
        maxFileSize={10000000}
        customUpload={true}
        uploadHandler={uploadHandler}
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
      <Button
        label="Submit"
        type="button"
        className="p-button-rounded  ml-auto submit-button"
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

export default AddTeam;
