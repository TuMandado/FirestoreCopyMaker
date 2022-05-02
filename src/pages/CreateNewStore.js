import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { storageFirebaseConfig } from "../firebase/database";
import { setDatabases } from "../store/actions";

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

// The create new store page is used to create a new store.
function CreateNewStore() {
  const isLoading = useSelector((state) => state.isLoading);
  const databases = useSelector((state) => state.databases);
  const dispatch = useDispatch();
  const [firebaseConfig, setFirebaseConfig] = useState({});
  const [uid, setUid] = useState("");
  const [error, setError] = useState(null);

  function addStore() {
    if (uid.length == 0) {
      setError("Please enter a store name.");
      return;
    }

    if (
      firebaseConfig.apiKey.length == 0 &&
      firebaseConfig.appId.length == 0 &&
      firebaseConfig.authDomain.length == 0 &&
      firebaseConfig.measurementId.length == 0 &&
      firebaseConfig.messagingSenderId.length == 0 &&
      firebaseConfig.projectId.length == 0 &&
      firebaseConfig.storageBucket.length == 0
    ) {
      setError("Please enter a firebase configuration.");
      return;
    }

    // Create a new store.
    const store = {
      uid: uid,
      firebaseConfig: firebaseConfig,
    };

    // Concat the new store to the existing databases.
    const newDatabases = [...databases, store];

    // Update the database.
    storageFirebaseConfig(uid, firebaseConfig)
      .then(() => {
        dispatch(setDatabases(newDatabases));
      })
      .then(() => {
        // Navigate to home page.
        window.location.href = "/";
      });
  }

  // If the database is loading, show a loading message.
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
    try {
      return (
        <div>
          <Header />
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Create New Store
              </Typography>
              <Typography variant="body2" component="p">
                Store Name:
              </Typography>
              <TextField
                id="uid"
                label="Store Name"
                value={uid}
                onChange={(event) => {
                  setUid(event.target.value);
                }}
                margin="normal"
              />
              <Typography variant="body2" component="p">
                Firebase Configuration:
              </Typography>
              <TextField
                id="apiKey"
                label="API Key"
                value={firebaseConfig.apiKey}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    apiKey: event.target.value,
                  });
                }}
                margin="normal"
              />
              <TextField
                id="appId"
                label="App ID"
                value={firebaseConfig.appId}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    appId: event.target.value,
                  });
                }}
                margin="normal"
              />
              <TextField
                id="authDomain"
                label="Auth Domain"
                value={firebaseConfig.authDomain}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    authDomain: event.target.value,
                  });
                }}
                margin="normal"
              />
              <TextField
                id="measurementId"
                label="Measurement ID"
                value={firebaseConfig.measurementId}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    measurementId: event.target.value,
                  });
                }}
                margin="normal"
              />
              <TextField
                id="messagingSenderId"
                label="Messaging Sender ID"
                value={firebaseConfig.messagingSenderId}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    messagingSenderId: event.target.value,
                  });
                }}
                margin="normal"
              />
              <TextField
                id="projectId"
                label="Project ID"
                value={firebaseConfig.projectId}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    projectId: event.target.value,
                  });
                }}
                margin="normal"
              />
              <TextField
                id="storageBucket"
                label="Storage Bucket"
                value={firebaseConfig.storageBucket}
                onChange={(event) => {
                  setFirebaseConfig({
                    ...firebaseConfig,
                    storageBucket: event.target.value,
                  });
                }}
                margin="normal"
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  addStore();
                }}
              >
                Add Store
              </Button>
              {/* // Add a go back home button. */}
              <Button
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Go Back Home
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } catch (error) {
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
              Error
            </Typography>
            <Typography variant="body2" component="p">
              {error}
            </Typography>
          </Box>
        </div>
      );
    }
  }
}

export default CreateNewStore;
