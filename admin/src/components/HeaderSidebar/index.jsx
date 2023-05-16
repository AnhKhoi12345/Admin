import "../../assets/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usaIcon from "../../images/usa-icon.png";
import user from "../../images/user.jpg";
import { faBars, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";
import { PanelMenu } from "primereact/panelmenu";
import { useNavigate } from "react-router-dom";
import { notificationList } from "../../database/NotificationDatabase";
import { Divider } from "primereact/divider";
import { Dialog } from "primereact/dialog";
import Notification from "../Notification";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
function Header({ checked, setChecked }) {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  // const [checked, setChecked] = useState(true);
  const sidebar = useRef(null);
  const brand = useRef(null);
  const notificationContainer = useRef(null);
  const [notiOpen, setNotiOpen] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    label: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const items = [
    {
      label: "Datatables",
      icon: "pi pi-fw pi-table",
      items: [
        {
          label: "Team",
          command: () => {
            navigate("/");
          },
          icon: "pi pi-fw pi-star",
        },
        {
          label: "User",
          command: () => {
            navigate("/datatables/user");
          },
          icon: "pi pi-fw pi-user",
        },
      ],
    },
    {
      label: "Dashboard",
      icon: "pi pi-fw pi-home",
      items: [
        {
          label: "Barchart",
          command: () => {
            navigate("/dashboard/barchart");
          },
          icon: "pi pi-fw pi-chart-bar",
        },
        {
          label: "Linechart",
          command: () => {
            navigate("/dashboard/linechart");
          },
          icon: "pi pi-fw pi-chart-line",
        },
        {
          label: "Piechart",
          command: () => {
            navigate("/dashboard/piechart");
          },
          icon: "pi pi-fw pi-chart-pie",
        },
      ],
    },
    {
      label: "Tasks",
      icon: "pi pi-fw pi-file",
      command: () => {
        navigate("/tasks");
      },
    },
    {
      label: "Chat",
      icon: "pi pi-fw pi-comment",
      command: () => {
        navigate("/chat");
      },
    },
    {
      label: "Schedule",
      icon: "pi pi-fw pi-calendar",
      command: () => {
        navigate("/schedule");
      },
    },
  ];
  const searchItems = [
    {
      id: 1,
      label: "User",
      parent: "Datatable",
      route: "/datatables/user",
    },
    {
      id: 2,
      label: "Team",
      parent: "Datatable",
      route: "",
    },
    {
      id: 3,
      label: "Barchart",
      parent: "Dashboard",
      route: "/dashboard/barchart",
    },
    {
      id: 4,
      label: "Linechart",
      parent: "Dashboard",
      route: "/dashboard/linechart",
    },
    {
      id: 5,
      label: "Piechart",
      parent: "Dashboard",
      route: "/dashboard/piechart",
    },
    {
      id: 6,
      label: "Chat",
      parent: "",
      route: "/chat",
    },
    {
      id: 7,
      label: "Tasks",
      parent: "",
      route: "/tasks",
    },
    {
      id: 8,
      label: "Schedule",
      parent: "",
      route: "/schedule",
    },
  ];
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const hashtag = "#";
  const [visible, setVisible] = useState(false);
  const navbar = useRef(null);

  function navbarScroll() {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 50) {
      navbar.current.style =
        "  background-color: black; box-shadow: -8px 3px 25px 1px rgb(210, 209, 209);";
    } else {
      navbar.current.style = "";
    }
  }

  const SidebarToggle = () => {
    console.log(checked);
    if (checked === false) {
      let ele = document.querySelectorAll(".p-menuitem-text");
      for (let i = 0; i < ele.length; i++) {
        ele[i].style.display = "block";
      }
      sidebar.current.style.animation = "sidemenu-open 0.5s forwards";
      navbar.current.classList.remove("navbar-short");
      navbar.current.classList.add("navbar-long");
    } else if (checked === true) {
      let ele = document.querySelectorAll(".p-menuitem-text");
      for (let i = 0; i < ele.length; i++) {
        ele[i].style.display = "none";
      }
      sidebar.current.style.animation = "sidemenu-close 0.5s forwards";
      navbar.current.classList.add("navbar-short");
      navbar.current.classList.remove("navbar-long");
    }
  };
  const SidebarHover = () => {
    if (checked === false) {
      let ele = document.querySelectorAll(".p-menuitem-text");
      for (let i = 0; i < ele.length; i++) {
        ele[i].style.display = "block";
      }
      sidebar.current.style.animation = "sidemenu-open 0.5s forwards";
      navbar.current.classList.remove("navbar-short");
      navbar.current.classList.add("navbar-long");
    }
  };
  const SidebarLeave = () => {
    if (checked === false) {
      let ele = document.querySelectorAll(".p-menuitem-text");
      for (let i = 0; i < ele.length; i++) {
        ele[i].style.display = "none";
      }
      // document.querySelector(".p-panelmenu-icon").style.display = "none";
      sidebar.current.style.animation = "sidemenu-close 0.5s forwards";
      navbar.current.classList.add("navbar-short");
      navbar.current.classList.remove("navbar-long");
    }
  };
  const notificationBell = () => {
    console.log("Notification press");
    if (notiOpen) {
      setNotiOpen(false);
      notificationContainer.current.style.display = "none";
    } else {
      setNotiOpen(true);
      notificationContainer.current.style.display = "block";
    }
  };
  const searchHeader = (
    <div className="search-header flex flex-wrap align-items-center justify-content-between gap-2">
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
      {/* </div> */}
    </div>
  );
  const searchBody = (rowData) => {
    if (rowData.parent.length > 0) {
      return (
        <p>
          <b>{rowData.label}</b> ({rowData.parent})
        </p>
      );
    } else {
      return (
        <p>
          <b>{rowData.label}</b>
        </p>
      );
    }
  };
  const onRowSelect = (e) => {
    navigate(`${e.data.route}`);
    console.log(e.data.route);
  };
  window.addEventListener("scroll", navbarScroll);
  const sidebarHeader = (
    <div className="logo-container">
      <a href="http://demo.rommar.in.ua/novanoid/novanoid-1/index.html">
        <img
          src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/logo-light.png"
          alt="img"
        ></img>
      </a>
    </div>
  );
  return (
    <>
      <div className="navbar" ref={navbar}>
        <div className="navbar-left ">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-icon nav-item"
            size="lg"
            onClick={() => setVisible(true)}
          />
          <Button
            icon="pi pi-search"
            onClick={() => setSearchVisible(true)}
            rounded
            text
            className="search-button"
          />
          <Dialog
            draggable={false}
            header={searchHeader}
            visible={searchVisible}
            style={{ width: "50vw" }}
            onHide={() => setSearchVisible(false)}
          >
            <DataTable
              dataKey="id"
              filters={filters}
              value={searchItems}
              paginator
              rows={5}
              globalFilterFields={["label"]}
              emptyMessage="No item found."
              selectionMode="single"
              className=""
              onRowSelect={onRowSelect}
            >
              <Column field="label" body={searchBody} header="Navigation" />
            </DataTable>
          </Dialog>
        </div>

        <div className="navbar-right">
          <div className="navbar-right-icon">
            <a href={hashtag}>
              <img
                src={usaIcon}
                alt="usa-icon"
                className="flag-icon nav-item"
              />
            </a>
          </div>
          {/* <Menubar model={notificationItem} /> */}
          <FontAwesomeIcon
            icon={faBell}
            className="Menu-icon nav-item"
            size="lg"
            onClick={notificationBell}
          />
          <ul className="notification-container" ref={notificationContainer}>
            <h2>NOTIFICATION LIST</h2>
            {notificationList.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <Notification key={item.id} {...item} />
                  <Divider type="solid" className="divider" />
                </li>
              );
            })}
          </ul>
          <div className="navbar-right-profile">
            <Avatar
              image={user}
              size="normal"
              shape="circle"
              className="profile-pic nav-item"
              label="Profile Avatar"
            />
          </div>
        </div>
      </div>
      <div
        className="sidebar-1200"
        ref={sidebar}
        onMouseOver={() => SidebarHover()}
        onMouseOut={() => SidebarLeave()}
      >
        <div className="logo-1200">
          <a href="http://demo.rommar.in.ua/novanoid/novanoid-1/index.html">
            <img
              src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/favicon.png"
              alt="img"
              ref={brand}
            ></img>
          </a>

          <InputSwitch
            checked={checked}
            className="close-button"
            onChange={(e) => {
              setChecked(e.value);
              SidebarToggle();
            }}
          />
        </div>
        <div className="card flex justify-content-center">
          <PanelMenu model={items} className="w-full md:w-25rem" />
        </div>
      </div>
      <div className="card flex justify-content-center sidebar-container">
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          icons={sidebarHeader}
          className="sidebar"
        >
          <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-25rem" />
          </div>
        </Sidebar>
      </div>
    </>
  );
}
export default Header;
