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
import { editDatabaseConfigurations } from "../firebase/database";
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

// The edit store page is used to edit the firebaseConfig of a store.
function EditStore() {
  const isLoading = useSelector((state) => state.isLoading);
  const params = useParams();
  const storeId = useParams().storeId;
  const databases = useSelector((state) => state.databases);
  const dispatch = useDispatch();
  const [firebaseConfig, setFirebaseConfig] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (databases && databases.length > 0) {
      const store = databases.find((store) => store.uid == storeId);
      setFirebaseConfig(store.firebaseConfig);
    }
  }, [databases]);

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
      // Return the form to edit the firebaseConfig of the store.
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
              width: "100%",
              maxWidth: "960px",
              padding: "0 1rem",
            }}
          >
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "960px",
                  padding: "0 1rem",
                }}
              >
                <TextField
                  id="apiKey"
                  label="API Key"
                  value={firebaseConfig.apiKey}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      apiKey: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="appId"
                  label="App ID"
                  value={firebaseConfig.appId}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      appId: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="authDomain"
                  label="Auth Domain"
                  value={firebaseConfig.authDomain}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      authDomain: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="measurementId"
                  label="Measurement ID"
                  value={firebaseConfig.measurementId}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      measurementId: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="messagingSenderId"
                  label="Messaging Sender ID"
                  value={firebaseConfig.messagingSenderId}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      messagingSenderId: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="projectId"
                  label="Project ID"
                  value={firebaseConfig.projectId}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      projectId: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="storageBucket"
                  label="Storage Bucket"
                  value={firebaseConfig.storageBucket}
                  onChange={(e) => {
                    setFirebaseConfig({
                      ...firebaseConfig,
                      storageBucket: e.target.value,
                    });
                  }}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    editDatabaseConfigurations(storeId, firebaseConfig)
                      .then(() => {
                        dispatch(setDatabases());
                      })
                      .then(() => {
                        window.location.href = "/";
                      })
                      .catch((error) => {
                        alert(error);
                      });
                  }}
                >
                  Save
                </Button>
                <Button
                  onClick={() => {
                    // Go to th homepage
                    window.location.href = "/";
                  }}
                  size="small"
                >
                  Go back home
                </Button>
              </CardActions>
            </Card>
          </Box>
        </div>
      );
    } catch (error) {
      setError(error);
      // Return the error message.
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
              width: "100%",
              maxWidth: "960px",
              padding: "0 1rem",
            }}
          >
            <Typography variant="h4">{error.message}</Typography>
          </Box>
        </div>
      );
    }
  }
}

export default EditStore;
