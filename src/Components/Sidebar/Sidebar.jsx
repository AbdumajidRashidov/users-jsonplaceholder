import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/themeContext";
import "./Sidebar.scss";
//mui components
import { List, ListItemButton, ListItemText } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../Switch/Switch";

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const { theme, setTheme } = useContext(ThemeContext);
  function handleChangeTheme() {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <List component="nav" aria-label="secondary">
        <NavLink to="/">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText
              className={theme ? "white-text" : "dark-text"}
              primary="Users List"
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/addpost">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText
              className={theme ? "white-text" : "dark-text"}
              primary="Add Post"
            />
          </ListItemButton>
        </NavLink>
        <FormControlLabel
          className={theme ? "white-text" : "dark-text"}
          control={
            <MaterialUISwitch
              sx={{ m: 2, mr: 0 }}
              checked={theme}
              onChange={handleChangeTheme}
            />
          }
          label={theme ? "light" : "dark"}
        />
      </List>
    </>
  );
}
