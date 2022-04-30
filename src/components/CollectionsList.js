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
import { setSelectedCollections } from "../store/actions";

export default function CollectionsList() {
  const dispatch = useDispatch();
  var collections = useSelector((state) => state.collections);
  var selectedCollections = useSelector((state) => state.selectedCollections);
  var selectedCollections = useSelector((state) => state.selectedCollections);

  const handleToggle = (collection) => () => {
    var newSelectedCollections = [...selectedCollections];
    var index = newSelectedCollections.indexOf(collection);
    if (index === -1) {
      newSelectedCollections.push(collection);
    } else {
      newSelectedCollections.splice(index, 1);
    }
    dispatch(setSelectedCollections(newSelectedCollections));
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
        Collections
      </h3>
      {collections?.map((collection) => (
        <ListItem key={collection}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedCollections.indexOf(collection) !== -1}
              tabIndex={-1}
              disableRipple
              onClick={handleToggle(collection)}
            />
          </ListItemIcon>
          <ListItemText primary={collection} />
          <ListItemIcon>
            <IconButton
              edge="end"
              aria-label="info"
              onClick={() => {
                alert(`${collection}`);
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
