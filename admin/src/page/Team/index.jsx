import "../../assets/Team.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { teamList } from "../../database/TeamDatabase";
// import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [team, setTeam] = useState(null);
  // rowData.calculatedScore = this.calculateScore(rowData.items)
  // let teamList = [
  //   {
  //     id: 1,
  //     name: {
  //       fullName: "RUSSEL J.SPAN",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-1.jpg",
  //       email: "russel@gmail.com",
  //     },
  //     title: "Founder",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "twitter.com",
  //       youtube: "youtube.com",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: {
  //       fullName: "ETTA R.CARTER",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-2.jpg",
  //       email: "etta@gmail.com",
  //     },
  //     title: "Manager",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "twitter.com",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: {
  //       fullName: "RONALD J.SMITH",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-3.jpg",
  //       email: "ronald@gmail.com",
  //     },
  //     title: "Coder",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "twitter.com",
  //       youtube: "youtube.com",
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: {
  //       fullName: "PATRICK J.LAMES",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-4.jpg",
  //       email: "patrick@gmail.com",
  //     },
  //     title: "Developer",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "N/A",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 5,
  //     name: {
  //       fullName: "TAMARA R.BURNS",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-5.jpg",
  //       email: "tamara@gmail.com",
  //     },
  //     title: "Coodrdinator",
  //     socialMedia: {
  //       facebook: "N/A",
  //       twitter: "twitter.com",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 6,
  //     name: {
  //       fullName: "JORGE E.MARR",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg",
  //       email: "jorge@gmail.com",
  //     },
  //     title: "Support",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "N/A",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 7,
  //     name: {
  //       fullName: "JORGE E.MARR",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg",
  //       email: "jorge@gmail.com",
  //     },
  //     title: "Support",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "N/A",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 8,
  //     name: {
  //       fullName: "JORGE E.MARR",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg",
  //       email: "jorge@gmail.com",
  //     },
  //     title: "Support",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "N/A",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 9,
  //     name: {
  //       fullName: "JORGE E.MARR",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg",
  //       email: "jorge@gmail.com",
  //     },
  //     title: "Support",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "N/A",
  //       youtube: "N/A",
  //     },
  //   },
  //   {
  //     id: 10,
  //     name: {
  //       fullName: "JORGE E.MARR",
  //       img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg",
  //       email: "jorge@gmail.com",
  //     },
  //     title: "Support",
  //     socialMedia: {
  //       facebook: "facebook.com",
  //       twitter: "N/A",
  //       youtube: "N/A",
  //     },
  //   },
  // ];

  useEffect(() => {
    setTeam(teamList);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "name.fullName": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const nameBody = (rowData) => {
    const name = rowData.name;

    return (
      <div className="team-datatable-name">
        <Avatar
          image={name.img}
          size="large"
          shape="circle"
          className="team-datatable-name-img"
          label="Profile Avatar"
        />
        <div className="team-datatable-name-text">
          <p>
            <b>{name.fullName}</b>
          </p>
          {/* <br /> */}
          <p className="team-datatable-name-email">{name.email}</p>
        </div>
      </div>
    );
  };
  const mediaBody = (rowData) => {
    const media = rowData.socialMedia;

    return (
      <div className="team-datatable-icon">
        <div>
          <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
          <p>{media.facebook}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} className="facebook-i" size="lg" />
          <p>{media.twitter}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faYoutube} className="facebook-i" size="lg " />
          <p>{media.youtube}</p>
        </div>
      </div>
    );
  };
  const actionBody = (rowData) => {
    return (
      <div className="team-datatable-action">
        <Button type="button" label="Edit" raised></Button>
        <Button label="Delete" severity="danger" raised />
      </div>
    );
  };
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Team Datatable</span>
      <div class=" flex flex-wrap align-items-center justify-content-between gap-5">
        <Button label="Add" />

        <span className="p-input-icon-left">
          <FontAwesomeIcon
            icon={faSearch}
            className="Menu-icon nav-item"
            size="lg"
          />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    </div>
  );
  // const onRowEditComplete = (e) => {
  //   let _team = [...team];
  //   let { newData, index } = e;

  //   _team[index] = newData;

  //   setTeam(_team);
  // };
  // const textEditor = (options) => {
  //   return (
  //     <InputText
  //       type="text"
  //       value={options.value}
  //       onChange={(e) => options.editorCallback(e.target.value)}
  //     />
  //   );
  // };
  // const nameEditor = (options) => {
  //   return (
  //     <>
  //       <InputText
  //         type="text"
  //         value={options.value.fullName}
  //         onChange={(e) => options.editorCallback(e.target.value)}
  //       />
  //       <InputText
  //         type="text"
  //         value={options.value.email}
  //         onChange={(e) => options.editorCallback(e.target.value)}
  //       />
  //     </>
  //   );
  // };
  // const rowEditorTemplate = (rowData, props) => {
  //   const rowEditor = props.rowEditor;
  //   if (rowEditor.editing) {
  //     return rowEditor.element; // default element
  //   } else {
  //     // custom init element
  //     return (
  //       <Button
  //         type="button"
  //         label="Edit"
  //         text
  //         onClick={rowEditor.onInitClick}
  //         className={rowEditor.initClassName}
  //       ></Button>
  //       // </div>
  //     );
  //   }
  // };
  const onRowSelect = (e) => {
    navigate(`/team/${e.data.id}`);
    console.log(e.data.id);
  };
  return (
    <DataTable
      header={header}
      dataKey="id"
      filters={filters}
      // filterDisplay="row"
      removableSort
      value={team}
      paginator
      rows={3}
      rowsPerPageOptions={[3, 5, 10]}
      globalFilterFields={["id", "name.fullName", "title"]}
      emptyMessage="No members found."
      // editMode="row"
      // onRowEditComplete={onRowEditComplete}
      selectionMode="single"
      // selection={selectedProduct}
      // onSelectionChange={(e) => setSelectedProduct(e.value)}
      className="team-datatable"
      onRowSelect={onRowSelect}
    >
      <Column
        field="id"
        header="ID"
        // filter
        sortable
        className="id"
      />
      <Column
        field="name"
        body={nameBody}
        header="Name"
        sortable
        sortField="name.fullName"
        // editor={(options) => nameEditor(options)}
        // filterField="name.fulName"
        // filter
        className="name"
      />
      <Column
        field="title"
        header="Title"
        className="title"
        sortable
        // editor={(options) => textEditor(options)}
        // filter
      />
      <Column
        field="socialMedia"
        body={mediaBody}
        header="Social Media"
        // editor={(options) => textEditor(options)}
      />
      <Column
        field="action"
        header="Action"
        className="action"
        body={actionBody}
        // rowEditor
      />
      {/* <Column
        field="action"
        header="Action"
        rowEditor
        body={rowEditorTemplate}
      ></Column> */}
    </DataTable>
  );
}
export default Admin;
