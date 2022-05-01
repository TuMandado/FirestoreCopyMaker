import React from "react";
import Header from "../components/Header";
import CollectionsList from "../components/CollectionsList";
import DatabaseList from "../components/DatabaseList";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  const databases = useSelector((state) => state.databases);
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
          <CollectionsList />
          <DatabaseList />
        </div>
      </div>
    );
  }
}

export default Home;
