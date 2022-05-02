import React, { useState } from "react";
import Header from "../components/Header";
import CollectionsList from "../components/CollectionsList";
import DatabaseList from "../components/DatabaseList";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "../components/Menus";
import Button from "@mui/material/Button";
import { syncEverything } from "../firebase/syncDatabases";

function Home() {
  const databases = useSelector((state) => state.databases);
  const selectedCollections = useSelector((state) => state.selectedCollections);
  const selectedDatabases = useSelector((state) => state.selectedDatabases);
  var [syncingDatabases, setSyncingDatabases] = useState(false);

  function syncDatabases() {
    if (selectedDatabases.length == 0) {
      alert("Please select a database.");
      return;
    }
    if (selectedCollections.length == 0) {
      alert("Please select a collection.");
      return;
    }
    setSyncingDatabases(true);
    // Wait for the sync to complete
    syncEverything(selectedCollections, selectedDatabases).then(() => {
      setSyncingDatabases(false);
    }).catch((error) => {
      setSyncingDatabases(false);
      alert("Error: " + error);
    });
  }

  // If the databases are syncing, show a spinner
  if (syncingDatabases) {
    return (
      <div>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Typography variant="h5" component="h2">
            Syncing databases...
          </Typography>
        </Box>
      </div>
    );
  } else {
    if (!databases || databases.length == 0) {
      return (
        <div>
          <Header />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <Typography variant="h5" component="h2">
              Loading...
            </Typography>
          </Box>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0 auto",
              width: "100%",
              maxWidth: "960px",
              padding: "0 1rem",
            }}
          >
            <Menu />
            <CollectionsList />
            <DatabaseList />
          </div>
          {/* Under both list there should be a big SYNC button */}
          <Button
            sx={{
              // The button should be a big one in the bottom right corner
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              // The button should be a big one in the bottom right corner
              width: "200px",
              height: "100px",
              // The button should be a big one in the bottom right corner
              borderRadius: "5%",
              // The button should be a big one in the bottom right corner
              backgroundColor: "primary",
              // The button should be a big one in the bottom right corner
              color: "white",
              // The button should be a big one in the bottom right corner
              fontSize: "2rem",
            }}
            variant="contained"
            onClick={() => {
              syncDatabases();
            }}
          >
            Sync databases
          </Button>
        </div>
      );
    }
  }
}

export default Home;
