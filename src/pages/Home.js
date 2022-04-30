import React from "react";
import Header from "../components/Header";
import CollectionsList from "../components/CollectionsList";
import DatabaseList from "../components/DatabaseList";

function Home() {
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

export default Home;
