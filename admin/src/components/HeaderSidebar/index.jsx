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
import { Menubar } from "primereact/menubar";
import { notificationList } from "../../database/NotificationDatabase";
import { Divider } from "primereact/divider";

import Notification from "../Notification";
function Header({ checked, setChecked }) {
  const navigate = useNavigate();
  // const [checked, setChecked] = useState(true);
  const sidebar = useRef(null);
  const brand = useRef(null);
  const notificationContainer = useRef(null);
  const [notiOpen, setNotiOpen] = useState(false);
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
            navigate("/user");
          },
          icon: "pi pi-fw pi-user",
        },
      ],
    },
  ];
  // const notificationItem = [
  //   {
  //     icon: "pi pi-fw pi-bell",
  //     items: [
  //       {
  //         label: "New",
  //         icon: "pi pi-fw pi-plus",
  //       },
  //     ],
  //   },
  // ];
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
      document.querySelector(".p-menuitem-text").style.display = "block";
      document.querySelector(".p-panelmenu-icon").style.display = "block";
      sidebar.current.style.animation = "sidemenu-open 0.5s forwards";
      navbar.current.classList.remove("navbar-short");
      navbar.current.classList.add("navbar-long");
    } else if (checked === true) {
      document.querySelector(".p-menuitem-text").style.display = "none";
      document.querySelector(".p-panelmenu-icon").style.display = "none";
      sidebar.current.style.animation = "sidemenu-close 0.5s forwards";
      navbar.current.classList.add("navbar-short");
      navbar.current.classList.remove("navbar-long");
    }
  };
  const SidebarHover = () => {
    if (checked === false) {
      document.querySelector(".p-menuitem-text").style.display = "block";
      document.querySelector(".p-panelmenu-icon").style.display = "block";
      sidebar.current.style.animation = "sidemenu-open 0.5s forwards";
      navbar.current.classList.remove("navbar-short");
      navbar.current.classList.add("navbar-long");
    }
  };
  const SidebarLeave = () => {
    if (checked === false) {
      document.querySelector(".p-menuitem-text").style.display = "none";
      document.querySelector(".p-panelmenu-icon").style.display = "none";
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
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon nav-item"
            size="lg"
          />
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
            // onClick={setChecked}
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
