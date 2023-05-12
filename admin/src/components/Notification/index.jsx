function Notification(item) {
  if (item.type === "message") {
    return (
      <p>
        {item.title} has message you: {item.desc}
      </p>
    );
  } else if (item.type === "update") {
    return (
      <p>
        {item.title} has made an update action in a database: {item.desc}
      </p>
    );
  } else if (item.type === "delete") {
    return (
      <p>
        {item.title} has made delete action in a database: {item.desc}
      </p>
    );
  }
}
export default Notification;
