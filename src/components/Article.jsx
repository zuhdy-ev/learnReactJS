function Article(props) {
  return (
    <>
      <h3>🚀 {props.title}</h3>
      <small>
        📅 Date: {props.date}, 🏷️ Tags: {props.tags.join(", ")}
      </small>
      {/* <small>
        📅 Date: {props.date}, Tags: {props.tags.join(", ")}
      </small> */}
      {/* <div>⭐ Status: {props.status}</div>
      <div>
        🕶️ Jobdesc:
        {props.jobdesc.map((e) => {
          return <div>- {e}</div>;
        })}
      </div> */}
    </>
  );
}

export default Article;
