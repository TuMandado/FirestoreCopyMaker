import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDatabases } from "../store/actions";

// The database format is:
// {
// uid: "random name",
// firebaseConfig: {
//   apiKey: "",
//   appId: "",
//   authDomain: "",
//   measurementId: "",
//   messagingSenderId: "",
//   projectId: "",
//   storageBucket: "",
//   },

// Each database is stored in an array of objects.

export default function DatabaseList() {
  const dispatch = useDispatch();
  var databases = useSelector((state) => state.databases);
  var selectedDatabases = useSelector((state) => state.selectedDatabases);

  const handleToggle = (database) => () => {
    var newSelectedDatabases = [...selectedDatabases];
    var index = newSelectedDatabases.indexOf(database);
    if (index === -1) {
      newSelectedDatabases.push(database);
    } else {
      newSelectedDatabases.splice(index, 1);
    }
    dispatch(setSelectedDatabases(newSelectedDatabases));
  };

  return (
    <List
      sx={{
        width: "30%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          margin: "0 auto",
          width: "100%",
          maxWidth: "960px",
          padding: "0 1rem",
        }}
      >
        Databases
      </h3>
      {databases?.map((database) => (
        <ListItem key={database.uid}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedDatabases.indexOf(database) !== -1}
              tabIndex={-1}
              disableRipple
              onClick={handleToggle(database)}
            />
          </ListItemIcon>
          <ListItemText primary={database.uid} />
          <ListItemIcon>
            <IconButton
              edge="end"
              aria-label="info"
              onClick={() => {
                // Redirect to the database details page.
                window.location.href = `/store/${database.uid}`;
              }}
            >
              <InfoIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
