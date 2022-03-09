import { useRef } from "react";
import { TextFieldPost } from "../../Components/TextFields/TextField";
import Button from "@mui/material/Button";
import "./AddPosts.scss";
import Markdown from "../../Components/Markdown/Markdown";
export default function AddPosts() {
  const titleRef = useRef();
  const bodyRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(titleRef.current.children[0].children[0].value);
    console.log(bodyRef.current.markdown);

    const data = {
      title: titleRef.current.children[0].children[0].value,
      body: bodyRef.current.source,
    };

    fetch(`${process.env.REACT_APP_API}/addpost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <TextFieldPost
          ref={titleRef}
          className="textField"
          placeholder={"title"}
        ></TextFieldPost>
        <Markdown reference={bodyRef}></Markdown>
        <Button
          style={{ marginTop: "15px", width: "150px" }}
          variant="outlined"
          type="submit"
          color="primary"
        >
          Add Post
        </Button>
      </form>
    </>
  );
}
