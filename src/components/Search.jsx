import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onClick={searchKeydown}
        ></input>
        <button onClick={searchKeydown}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan kata kunci: {search}
      </small>
    </>
  );
}

export default Search;
