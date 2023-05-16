// import { useRef, useState } from "react";
// import "../../assets/SideBar.scss";
// import { Sidebar } from "primereact/sidebar";
// import { InputSwitch } from "primereact/inputswitch";
// import { PanelMenu } from "primereact/panelmenu";
// function SideBar({checked, setChecked}) {
//     const sidebar = useRef(null);
//     const brand = useRef(null);
//     const SidebarToggle = () => {
//         console.log(checked);
//         if (checked === false) {
//           let ele = document.querySelectorAll(".p-menuitem-text");
//           for (let i = 0; i < ele.length; i++) {
//             ele[i].style.display = "block";
//           }
//           sidebar.current.style.animation = "sidemenu-open 0.5s forwards";
//           navbar.current.classList.remove("navbar-short");
//           navbar.current.classList.add("navbar-long");
//         } else if (checked === true) {
//           let ele = document.querySelectorAll(".p-menuitem-text");
//           for (let i = 0; i < ele.length; i++) {
//             ele[i].style.display = "none";
//           }
//           sidebar.current.style.animation = "sidemenu-close 0.5s forwards";
//           navbar.current.classList.add("navbar-short");
//           navbar.current.classList.remove("navbar-long");
//         }
//       };
//       const SidebarHover = () => {
//         if (checked === false) {
//           let ele = document.querySelectorAll(".p-menuitem-text");
//           for (let i = 0; i < ele.length; i++) {
//             ele[i].style.display = "block";
//           }
//           sidebar.current.style.animation = "sidemenu-open 0.5s forwards";
//           navbar.current.classList.remove("navbar-short");
//           navbar.current.classList.add("navbar-long");
//         }
//       };
//       const SidebarLeave = () => {
//         if (checked === false) {
//           let ele = document.querySelectorAll(".p-menuitem-text");
//           for (let i = 0; i < ele.length; i++) {
//             ele[i].style.display = "none";
//           }
//           // document.querySelector(".p-panelmenu-icon").style.display = "none";
//           sidebar.current.style.animation = "sidemenu-close 0.5s forwards";
//           navbar.current.classList.add("navbar-short");
//           navbar.current.classList.remove("navbar-long");
//         }
//       };
//   return (
//     <>
//     <div
//         className="sidebar-1200"
//         ref={sidebar}
//         onMouseOver={() => SidebarHover()}
//         onMouseOut={() => SidebarLeave()}
//       >
//         <div className="logo-1200">
//           <a href="http://demo.rommar.in.ua/novanoid/novanoid-1/index.html">
//             <img
//               src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/favicon.png"
//               alt="img"
//               ref={brand}
//             ></img>
//           </a>

//           <InputSwitch
//             checked={checked}
//             className="close-button"
//             onChange={(e) => {
//               setChecked(e.value);
//               SidebarToggle();
//             }}
//           />
//         </div>
//         <div className="card flex justify-content-center">
//           <PanelMenu model={items} className="w-full md:w-25rem" />
//         </div>
//       </div>
//       <div className="card flex justify-content-center sidebar-container">
//         <Sidebar
//           visible={visible}
//           onHide={() => setVisible(false)}
//           icons={sidebarHeader}
//           className="sidebar"
//         >
//           <div className="card flex justify-content-center">
//             <PanelMenu model={items} className="w-full md:w-25rem" />
//           </div>
//         </Sidebar>
//       </div>
//       </>
//   );
// }
// export default SideBar;
