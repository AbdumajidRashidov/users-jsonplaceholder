import { Breadcrumbs, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";
import "./Breadcrumb.scss";

export default function Breadcrumb() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Button
        variant="outlined"
        className={theme ? "light-text" : "dark-text"}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to previous location
      </Button>
    </Breadcrumbs>
  );
}
