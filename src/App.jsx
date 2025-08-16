import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curPg, setCurPg] = useState(1);
  const [postPerPg, setPostPerPg] = useState(10);
  const ref = useRef();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Current posts
  const lastPost = curPg * postPerPg;
  const firstPost = lastPost - postPerPg;
  const currPosts = posts.slice(firstPost, lastPost);

  function paginate(number) {
    setCurPg(number);
  }
  
  function handleNumber() {
    // console.log(ref.current.valueAsNumber)
    setPostPerPg(ref.current.valueAsNumber);
    ref.current.value = " ";
  }

  return (
    <div>
      <h1>Post's List</h1>

      <label htmlFor="number">Post per page: </label>
      <input id="number" type="number" ref={ref} />
      <button onClick={handleNumber}>Submit</button>

      <Posts posts={currPosts} loading={loading} />
      <Pagination
        totalPosts={posts.length}
        postPerPg={postPerPg}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
