import { CircularProgress } from "@mui/material";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <CircularProgress size={"86px"} />
    </div>
  );
}
