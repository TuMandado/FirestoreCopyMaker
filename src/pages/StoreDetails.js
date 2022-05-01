import React, { useEffect } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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
export default function StoreDetails() {
  const params = useParams();
  const storeId = useParams().storeId;
  const isLoading = useSelector((state) => state.isLoading);
  const databases = useSelector((state) => state.databases);
  const [firebaseConfig, setFirebaseConfig] = React.useState({});

  useEffect(() => {
    if (databases && databases.length > 0) {
      console.log("databases", databases);
      const store = databases.find((store) => store.uid == storeId);
      console.log(store);
      setFirebaseConfig(store.firebaseConfig);
    }
  }, [databases]);

  // If the database is loading, show a loading message.
  if (!databases || databases.length == 0 ) {
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
                {storeId.toUpperCase()}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.apiKey}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.appId}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.authDomain}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.measurementId}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.messagingSenderId}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.projectId}
              </Typography>
              <Typography variant="body2" component="p">
                {firebaseConfig.storageBucket}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  // Go to th homepage
                  window.location.href = "/";
                }}
                size="small"
              >
                Go back home
              </Button>
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "black",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  // Go to the edit store page
                  window.location.href = `/edit/${storeId}`;
                }}
                size="small"
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } catch (error) {
      console.log("error :", error);
      return (
        <div>
          <Header />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Typography variant="h5" component="h2">
              Loading...
            </Typography>
          </Box>
        </div>
      );
    }
  }
}
