import { CardContent, Typography, Card } from "@mui/material";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";
import "./CommentsCard.scss";
export default function CommentsCard({ comment }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Card
        style={{
          boxShadow: "0 0 1px 0 gray",
          marginBottom: "20px",
          width: "95%",
        }}
        className={theme ? "dark-card" : "light-card"}
      >
        <CardContent className={theme ? "dark-card" : "light-card"}>
          <Typography variant="h5" color={"primary"} component="div">
            {comment.name}
          </Typography>
          <Typography variant="body2" className="comment_body">
            {comment.body}
          </Typography>
          <Typography
            className={theme ? "light-text" : "dark-text"}
            mt={"10px"}
            variant="body1"
          >
            {comment.email}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
