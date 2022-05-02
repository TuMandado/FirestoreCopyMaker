import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"; // Add a collection button.
import StorageIcon from "@mui/icons-material/Storage"; // Add a database button.
import HomeIcon from "@mui/icons-material/Home"; // Go to home button.
import HelpIcon from '@mui/icons-material/Help'; // Go to help button.
import { Link } from "react-router-dom";

// The menu has links to the home page, add a collection, and add a database. Each of these links with a ListItemText and ListItemIcon.
export default function Menu() {
  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
        color: "black",
        // The menu should be positioned at the very left of the screen.
        position: "fixed",
        left: 0,
        height: "100%",
        // It should have a black border on the right.
        borderRight: "1px solid black",
      }}
    >
      <MenuList>
        <Link
          // Remove blue color from the link and the underline.
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
          to="/"
        >
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home">Home</ListItemText>
          </MenuItem>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
          to="/newCollection"
        >
          <MenuItem>
            <ListItemIcon>
              <PlaylistAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add a collection">
              Add a collection
            </ListItemText>
          </MenuItem>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
          to="/newStore"
        >
          <MenuItem>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="Add a database">Add a database</ListItemText>
          </MenuItem>
        </Link>
        {
          // Add a button
        }
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
          to="/help"
        >
          <MenuItem>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help">Help</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
