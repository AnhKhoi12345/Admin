import "../../assets/Admin.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Admin() {
  //   const  hashtag = '#';
  let teamList = [
    {
      id: 1,
      name: {
        fullName: "RUSSEL J.SPAN",
        img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-1.jpg",
        email: "russel@gmail.com",
      },
      title: "Founder",
      socialMedia: {
        facebook: "facebook.com",
        twitter: "twitter.com",
        youtube: "youtube.com",
      },
    },
    {
      id: 2,
      name: {
        fullName: "ETTA R.CARTER",
        img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-2.jpg",
        email: "etta@gmail.com",
      },
      title: "Manager",
      socialMedia: {
        facebook: "facebook.com",
        twitter: "twitter.com",
        youtube: "N/A",
      },
    },
    {
      id: 3,
      name: {
        fullName: "RONALD J.SMITH",
        img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-3.jpg",
        email: "ronald@gmail.com",
      },
      title: "Coder",
      socialMedia: {
        facebook: "facebook.com",
        twitter: "twitter.com",
        youtube: "youtube.com",
      },
    },
    {
      id: 4,
      name: {
        fullName: "PATRICK J.LAMES",
        img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-4.jpg",
        email: "patrick@gmail.com",
      },
      title: "Developer",
      socialMedia: {
        facebook: "facebook.com",
        twitter: "N/A",
        youtube: "N/A",
      },
    },
    {
      id: 5,
      name: {
        fullName: "TAMARA R.BURNS",
        img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-5.jpg",
        email: "tamara@gmail.com",
      },
      title: "Coodrdinator",
      socialMedia: {
        facebook: "N/A",
        twitter: "twitter.com",
        youtube: "N/A",
      },
    },
    {
      id: 6,
      name: {
        fullName: "JORGE E.MARR",
        img: "http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg",
        email: "jorge@gmail.com",
      },
      title: "Support",
      socialMedia: {
        facebook: "facebook.com",
        twitter: "N/A",
        youtube: "N/A",
      },
    },
  ];
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
  return (
    <DataTable
      value={teamList}
      paginator
      rows={3}
      rowsPerPageOptions={[3, 4, 5]}
      className="team-datatable"
    >
      <Column field="id" header="ID" />
      <Column field="name" body={nameBody} header="Name" />
      <Column field="title" header="Title" />
      <Column field="socialMedia" body={mediaBody} header="Social Media" />
    </DataTable>
  );
}
export default Admin;
