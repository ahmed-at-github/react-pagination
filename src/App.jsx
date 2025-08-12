import axios from "axios";
import { useEffect, useState } from "react"
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curPg, setCurPg] = useState(1);
  const [postPerPg, setPostPerPg] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      setPosts(response.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  // Current pg 
  const lastPost = curPg * postPerPg;
  const firstPost = lastPost - postPerPg;
  const currPosts = posts.slice(firstPost, lastPost);

  function paginate(number) {
    setCurPg(number);

  }

  return (
    <div>
      <h1>Post's List</h1>
      <Posts posts={currPosts} loading={loading} />
      <Pagination totalPosts={posts.length} postPerPg={postPerPg} paginate={paginate} />
    </div>
  )
}

export default App
