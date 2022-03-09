import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Comments.scss";
import Loader from "./../../Components/Loader/Loader";
import CommentsCard from "./../../Components/CommentsCard/CommentsCard";
export default function Comments() {
  const param = useParams();
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/comments?postId=${param.postId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        if (data.length > 0) {
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [param.postId]);
  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : (
          comments.length > 0 && (
            <ul className="comments-list">
              {comments.map((comment) => {
                return <CommentsCard key={comment.id} comment={comment} />;
              })}
            </ul>
          )
        )}
      </>
    </>
  );
}
