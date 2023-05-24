import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "../../assets/AddTeam.scss";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

function AddTeam() {
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [study, setStudy] = useState("");
  const [work, setWork] = useState("");
  const [description, setDescription] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [image, setImage] = useState("");
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
    // setImage("hi");
    // fileUploadRef.upload();
    // console.log("hi");
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
  const handleSubmit = () => {
    console.log(
      fullName,
      email,
      phone,
      title,
      study,
      work,
      youtube,
      twitter,
      facebook,
      description,
      image
    );
  };

  return (
    <div className="create-profile-container">
      <h1>Create new team member</h1>
      <h2>Full name</h2>
      <InputText
        keyfilter="alpha"
        className="add-team-input"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
        required
      />
      <h2>Email</h2>
      <InputText
        keyfilter="email"
        className="add-team-input"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <h2>Phone</h2>
      <InputText
        keyfilter="pnum"
        className="add-team-input"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        required
      />
      <h2>Title</h2>
      <InputText
        keyfilter="alpha"
        className="add-team-input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <h2>Studied at</h2>
      <InputText
        keyfilter="alpha"
        className="add-team-input"
        onChange={(e) => setStudy(e.target.value)}
        value={study}
        required
      />
      <h2>Currently work in</h2>
      <InputText
        keyfilter="alpha"
        className="add-team-input"
        onChange={(e) => setWork(e.target.value)}
        value={work}
      />
      <h2 className="social-media-fields">Social media:</h2>
      <h4>Youtube link</h4>
      <InputText
        className="add-team-input"
        onChange={(e) => setYoutube(e.target.value)}
        value={youtube}
      />
      <h4>Facebook link</h4>
      <InputText
        className="add-team-input"
        onChange={(e) => setFacebook(e.target.value)}
        value={facebook}
      />
      <h4>Twitter link</h4>
      <InputText
        className="add-team-input"
        onChange={(e) => setTwitter(e.target.value)}
        value={twitter}
        required
      />
      <h2>Description</h2>
      <InputTextarea
        className="add-team-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={5}
        cols={30}
      />
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <FileUpload
        ref={fileUploadRef}
        name="image"
        // url="/api/upload"
        accept="image/*"
        maxFileSize={1000000}
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
        //   icon="pi pi-times"
        className="p-button-rounded  ml-auto submit-button"
        onClick={handleSubmit}
        //   onClick={() => onTemplateRemove(file, props.onRemove)}
      />
    </div>
  );
}

export default AddTeam;
