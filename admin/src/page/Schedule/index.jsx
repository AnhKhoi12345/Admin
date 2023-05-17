import "../../assets/Schedule.scss";
export default function Schedule() {
  return (
    <div className="schedule-container">
      <iframe
        title="Schedule"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FHo_Chi_Minh&src=aG5hazI0NDIwMDFzbWc0QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAzNjYxMDU4Nzk3NjA1ODMxNjExQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dmkudmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2xhc3Nyb29tMTA2Nzc0MDIwODI5ODQ2ODc1MzUyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%237986CB&color=%230047a8&color=%237986CB&color=%230B8043&color=%23202124"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
