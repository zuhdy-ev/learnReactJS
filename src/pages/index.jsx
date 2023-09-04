import { useState } from "react";
import { useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // componentDidMount
  useEffect(() => {
    console.log("render");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("posts changed");
  }, [posts]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("component will unmount");
    };
  }, []);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {/* {posts.map(({ title, tags, date }, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...{ title, tags, date }} key={index} /> // same as above, this called "spread attributes"
      ))} */}
      {posts.map((props, index) => (
        <Article {...props} key={index} /> // same as above, but we don't know what props are passed in this case
      ))}
    </>
  );
}

export default Homepage;
