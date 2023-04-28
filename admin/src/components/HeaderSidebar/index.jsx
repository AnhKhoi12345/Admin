import "../../assets/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usaIcon from "../../images/usa-icon.png";
import user from "../../images/user.jpg";
import { faBars, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";
import { PanelMenu } from "primereact/panelmenu";
function Header() {
  const items = [
    {
      label: "Datatables",
      // icon: "pi pi-fw pi-file",
      items: [
        {
          label: "Team",
          // icon: "pi pi-fw pi-plus",
          // items: [
          //   {
          //     label: "Bookmark",
          //     // icon: "pi pi-fw pi-bookmark",
          //   },
          //   {
          //     label: "Video",
          //     // icon: "pi pi-fw pi-video",
          //   },
          // ],
        },
        {
          label: "User",
          // icon: "pi pi-fw pi-trash",
        },
        // {
        //   label: "Export",
        //   icon: "pi pi-fw pi-external-link",
        // },
      ],
    },
    // {
    //   label: "Edit",
    //   icon: "pi pi-fw pi-pencil",
    //   items: [
    //     {
    //       label: "Left",
    //       icon: "pi pi-fw pi-align-left",
    //     },
    //     {
    //       label: "Right",
    //       icon: "pi pi-fw pi-align-right",
    //     },
    //     {
    //       label: "Center",
    //       icon: "pi pi-fw pi-align-center",
    //     },
    //     {
    //       label: "Justify",
    //       icon: "pi pi-fw pi-align-justify",
    //     },
    //   ],
    // },
    // {
    //   label: "Users",
    //   icon: "pi pi-fw pi-user",
    //   items: [
    //     {
    //       label: "New",
    //       icon: "pi pi-fw pi-user-plus",
    //     },
    //     {
    //       label: "Delete",
    //       icon: "pi pi-fw pi-user-minus",
    //     },
    //     {
    //       label: "Search",
    //       icon: "pi pi-fw pi-users",
    //       items: [
    //         {
    //           label: "Filter",
    //           icon: "pi pi-fw pi-filter",
    //           items: [
    //             {
    //               label: "Print",
    //               icon: "pi pi-fw pi-print",
    //             },
    //           ],
    //         },
    //         {
    //           icon: "pi pi-fw pi-bars",
    //           label: "List",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: "Events",
    //   icon: "pi pi-fw pi-calendar",
    //   items: [
    //     {
    //       label: "Edit",
    //       icon: "pi pi-fw pi-pencil",
    //       items: [
    //         {
    //           label: "Save",
    //           icon: "pi pi-fw pi-calendar-plus",
    //         },
    //         {
    //           label: "Delete",
    //           icon: "pi pi-fw pi-calendar-minus",
    //         },
    //       ],
    //     },
    //     {
    //       label: "Archive",
    //       icon: "pi pi-fw pi-calendar-times",
    //       items: [
    //         {
    //           label: "Remove",
    //           icon: "pi pi-fw pi-calendar-minus",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];
  const hashtag = "#";
  const [visible, setVisible] = useState(false);
  const navbar = useRef(null);
  // let [flag, setFlag] = useState();
  function navbarScroll() {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 50) {
      navbar.current.style =
        "  background-color: white; box-shadow: -8px 3px 25px 1px rgb(210, 209, 209);";
    } else {
      navbar.current.style = "";
    }
  }
  window.addEventListener("scroll", navbarScroll);
  const sidebarHeader = (
    <div className="logo-container">
      <a href={hashtag}>
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
            className="Menu-icon nav-item"
            size="lg"
            onClick={() => setVisible(true)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="Menu-icon nav-item"
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

          <FontAwesomeIcon
            icon={faBell}
            className="Menu-icon nav-item"
            size="lg"
          />
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
        {/* <Menubar model={items} className="navbar-right" /> */}
      </div>
      <div className="card flex justify-content-center">
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