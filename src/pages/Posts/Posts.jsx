import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Posts.scss";
// components
import Loader from "./../../Components/Loader/Loader";
import PostsCard from "./../../Components/PostsCard/PostsCard";
export default function Posts() {
  const param = useParams();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/posts?userId=${param.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        if (data.length > 0) {
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [param.userId]);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          posts.length > 0 && (
            <ul className="posts-list">
              {posts.map((post) => {
                return <PostsCard key={post.id} postData={post} />;
              })}
            </ul>
          )
        )}
      </div>
    </>
  );
}
