const ArticleStatus = ({ isNew }) => {
  return isNew && <span>🆕❗</span>;
};

const NewArticle = () => {
  return <span>BARUUUU!</span>
}

function Article(props) {
  return (
    <>
      <h3>🚀 {props.title}</h3>
      <small>
        📅 Date: {props.date}, 🏷️ Tags: {props.tags.join(", ")}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}

export default Article;
