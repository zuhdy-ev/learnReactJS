import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input onChange={changeSearch}></input>
      </div>
      <small>Ditemukan 0 data dengan kata kunci: {search}</small>
      {posts.map(({ title, tags, date }, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...{ title, tags, date }} key={index} /> // same as above, this called "spread attributes"
      ))}
    </>
  );
}

export default Homepage;
