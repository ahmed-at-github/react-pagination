import axios from "axios";
import { useEffect, useState } from "react"
import Posts from "./components/Posts";


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

  return (
    <div>
    <h1>Post's List</h1>
      <Posts posts={posts} loading={loading}/>
    </div>
  )
}

export default App
