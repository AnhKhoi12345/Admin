import "../../assets/Team.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import userApi from "../../api/userApi";
// import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Team({ checked }) {
  const navigate = useNavigate();
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [team, setTeam] = useState(null);
  useEffect(() => {
    const fetchTeamList = async () => {
      // await setTeam(userApi.getAll())
      const teamlist = await userApi.getAll();
      console.log(teamlist.data);
      setTeam(teamlist.data);
    };
    fetchTeamList();
    if (checked) {
      document.querySelector(".p-datatable").classList.remove("table-long");
      document.querySelector(".p-datatable").classList.add("table-short");
    } else {
      document.querySelector(".p-datatable").classList.add("table-long");
      document.querySelector(".p-datatable").classList.remove("table-short");
    }
  }, [checked]); // eslint-disable-line react-hooks/exhaustive-deps
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    fullName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
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
    return (
      <div className="team-datatable-name">
        <Avatar
          image={`http://localhost:5000/uploads/${rowData?.image}`}
          size="large"
          shape="circle"
          className="team-datatable-name-img"
          label="Profile Avatar"
        />
        <div className="team-datatable-name-text">
          <p>
            <b>{rowData?.fullName}</b>
          </p>
          {/* <br /> */}
          <p className="team-datatable-name-email">{rowData?.email}</p>
        </div>
      </div>
    );
  };
  const mediaBody = (rowData) => {
    const media = rowData?.socialMedia;

    return (
      <div className="team-datatable-icon">
        {media?.facebook ? (
          <div>
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-i"
              size="lg"
            />
            <p>{media?.facebook}</p>
          </div>
        ) : (
          <></>
        )}
        {media?.twitter ? (
          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              className="facebook-i"
              size="lg"
            />
            <p>{media?.twitter}</p>
          </div>
        ) : (
          <></>
        )}
        {media?.youtube ? (
          <div>
            <FontAwesomeIcon
              icon={faYoutube}
              className="facebook-i"
              size="lg "
            />
            <p>{media?.youtube}</p>
          </div>
        ) : (
          <></>
        )}
        {media?.youtube || media?.twitter || media?.facebook ? (
          <></>
        ) : (
          <div>N/A</div>
        )}
        {/* <div>
          <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
          <p>{media?.facebook}</p>
        </div> */}
        {/* <div>
          <FontAwesomeIcon icon={faTwitter} className="facebook-i" size="lg" />
          <p>{media?.twitter}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faYoutube} className="facebook-i" size="lg " />
          <p>{media?.youtube}</p>
        </div> */}
      </div>
    );
  };
  const onClickEdit = (e) => {
    navigate(`/datatables/team/edit/${e.data._id}`);
    console.log(e.data.id);
  };
  const actionBody = (rowData) => {
    return (
      <div className="team-datatable-action">
        <Button
          type="button"
          label="Edit"
          raised
          onClick={onClickEdit}
        ></Button>
        <Button label="Delete" severity="danger" raised />
      </div>
    );
  };
  const onClickAdd = () => {
    navigate("/addteam");
    // console.log(e.data.id);
  };
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Team Datatable</span>
      <div className=" flex flex-wrap align-items-center justify-content-between gap-5">
        <Button label="Add" onClick={() => onClickAdd()} />

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
  const onRowSelect = (e) => {
    navigate(`/datatables/team/${e.data._id}`);
    console.log(e.data.id);
  };
  return (
    <DataTable
      header={header}
      dataKey="_id"
      filters={filters}
      // filterDisplay="row"
      removableSort
      value={team}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 20]}
      globalFilterFields={["_id", "fullName", "title"]}
      emptyMessage="No members found."
      selectionMode="single"
      className="team-datatable"
      onRowSelect={onRowSelect}
    >
      <Column
        field="_id"
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
        sortField="fullName"
        className="name"
      />
      <Column field="title" header="Title" className="title" sortable />
      <Column field="socialMedia" body={mediaBody} header="Social Media" />
      <Column
        field="action"
        header="Action"
        className="action"
        body={actionBody}
      />
    </DataTable>
  );
}
export default Team;
