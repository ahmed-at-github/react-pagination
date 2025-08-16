

const Posts = ({ posts, loading }) => {

    console.log(posts);
    
    if (loading) return <h2> Loading...    </h2>

    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}> {post.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Posts; 