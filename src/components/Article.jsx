function Article(props) {
  return (
    <>
      <div>🚀 Name: {props.name}</div>
      <div>⭐ Status: {props.status}</div>
      <div>
        🕶️ Jobdesc:
        {props.jobdesc.map((e) => {
          return <div>- {e}</div>;
        })}
      </div>
    </>
  );
}

export default Article;
