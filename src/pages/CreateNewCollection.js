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
import { setCollections } from "../store/actions";
import { editCollections } from "../firebase/collection";
// The create new collection concatenates the name of the new collection in the array of collections, that is in the redux store.
// It also has the same style as the create new store.

function CreateNewCollection() {
  var dispatch = useDispatch();
  var collections = useSelector((state) => state.collections);
  var databases = useSelector((state) => state.databases);

  var [collectionName, setCollectionName] = useState("");
  var [error, setError] = useState("");

  function addCollection() {
    if (collectionName.length == 0) {
      setError("Please enter a collection name.");
      return;
    }

    // Add the new collection to the array of collections.
    collections.push(collectionName);

    // Update the collections in the database.
    editCollections(collections)
      .then(() => {
        dispatch(setCollections(collections));
      })
      .then(() => {
        // Redirect to the home page.
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error);
      });
  }

  // If the database is loading, show a loading message.
  if (!databases || databases.length == 0) {
    return (
      <Box>
        <Header />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="50px"
        >
          <Typography variant="h4">Loading...</Typography>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Header />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="50px"
        >
          <Card>
            <CardContent>
              <Typography variant="h4">Create New Collection</Typography>
              <TextField
                label="Collection Name"
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <Typography color="error">{error}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={addCollection}
              >
                Create
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
        </Box>
      </Box>
    );
  }
}

export default CreateNewCollection;
