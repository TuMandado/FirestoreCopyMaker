import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Help() {
  // The help page, has a list of instructions to create:
  // 1. A database in Firebase.
  // 2. A database in the App.
  // 3. A collection in the App.
  // 4. Do a sync.

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4">Help</Typography>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          marginTop="50px"
        >
          <Typography variant="h6">
            1. Create a database in Firebase.
          </Typography>
          <Typography variant="body1">
            Go to the Firebase page and create a new project.
          </Typography>
          <Typography variant="body1">
            You can also create a new database in the Firebase console.
          </Typography>
          <Typography variant="h6">2. Create a database in the App.</Typography>
          <Typography variant="body1">
            Go to the Home page and click on the "Create new database" button.
          </Typography>
          <Typography variant="body1">
            The information needed to create a database in the App is the name
            need in firebase credentials.
          </Typography>
          <Typography variant="h6">
            3. Create a collection in the App.
          </Typography>
          <Typography variant="body1">
            If you create a new collection in the PetShop database, you will
            need to create a new collection here also.
          </Typography>
          <Typography variant="body1">
            Go to the Home page and click on the "Create new collection" button.
          </Typography>
          <Typography variant="h6">4. Do a sync.</Typography>
          <Typography variant="body1">Go to the Home page.</Typography>
          <Typography variant="body1">
            Select the collections you want to sync.
          </Typography>
          <Typography variant="body1">
            Select the database you want to sync.
          </Typography>
          <Typography variant="body1">Click on the "Sync" button.</Typography>
          <Typography variant="body1">
            You will see a message saying "Sync successful".
          </Typography>
          <Button
            component={Link}
            to="/"
            style={{ marginTop: "50px" }}
            >
            Go to Home
            </Button>
        </Box>
      </div>
    </div>
  );
}
