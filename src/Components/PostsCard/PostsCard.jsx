import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Modal from "../Modal/Modal";
import "./PostsCard.scss";
import {
  CardContent,
  Typography,
  CardActions,
  Card,
  Button,
} from "@mui/material";

export default function PostsCard({ postData }) {
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Card
        // key={postData.id}
        className={theme ? "dark-postcard" : "light-postcard"}
        style={{
          boxShadow: "0 0 1px 0 grey",
          marginBottom: "20px",
          width: "95%",
        }}
      >
        <CardContent>
          <Typography variant="h5" color={"primary"} component="div">
            {postData.title}
          </Typography>
          <Typography className="postsBody" variant="body2">
            {postData.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={{ margin: "10px 15px 10px 10px" }} to={`${postData.id}`}>
            <Button
              className={theme ? "light-btn" : "dark-btn"}
              variant="outlined"
              color="primary"
            >
              Show Comments
            </Button>
          </Link>
          <Button
            className={theme ? "light-btn" : "dark-btn"}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Add comment
          </Button>

          <Modal
            open={open}
            dataId={postData.id}
            handleClose={handleClose}
          ></Modal>
        </CardActions>
      </Card>
    </>
  );
}
