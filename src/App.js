import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Context/themeContext";
import { useContext } from "react";

import "./App.scss";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import Comments from "./pages/Comments/Comments";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import { createTheme } from "@mui/material/styles";
import AddPosts from "./pages/AddPosts/AddPosts";

function App() {
  const { theme } = useContext(ThemeContext);

  const themeColor = createTheme({
    palette: {
      primary: {
        light: "#fff",
        main: "#3f50b5",
        dark: "#022546",
        contrastText: "#fff",
      },
    },
  });
  return (
    <div className="App">
      <Grid
        container
        className="container"
        spacing={2}
        bgcolor={
          theme
            ? themeColor.palette.primary.dark
            : themeColor.palette.primary.light
        }
      >
        <Grid
          className="GridSidebar"
          item
          xs={12}
          sm={3}
          position={"sticky"}
          top={"0"}
          height={"100vh"}
          boxShadow={theme ? "0 0 2px 0 white" : "0 0 2px 0 grey"}
          bgcolor={
            theme
              ? themeColor.palette.primary.dark
              : themeColor.palette.primary.light
          }
        >
          <Sidebar />
        </Grid>

        <Grid item xs={12} sm={9} spacing={2}>
          <Breadcrumb></Breadcrumb>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/posts">
              <Route path=":userId" element={<Posts></Posts>}></Route>
            </Route>
          </Routes>
          <Routes>
            <Route
              path="posts/:userId/:postId"
              element={<Comments></Comments>}
            ></Route>
          </Routes>
          <Routes>
            <Route path="addpost" element={<AddPosts></AddPosts>}></Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
