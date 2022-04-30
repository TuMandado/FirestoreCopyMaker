import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CheckboxList from "./components/CheckboxList";
import ButtonsActions from "./components/ButtonsActions";
import Home from "./pages/Home";
import StoreDetails from "./pages/StoreDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setCollections, setDatabases } from "./store/actions";
import { useDispatch } from "react-redux";
import { getCollections, editCollections } from "./firebase/collection";

function App() {
  // Get info from collections when the app is loaded.
  const dispatch = useDispatch();
  try {
    return (
      <div className={"App"}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/store/:storeId" element={<StoreDetails />} />
          </Routes>
        </Router>
      </div>
    );
  } catch (error) {
    return <div className={"App"}>error</div>;
  }
}

export default App;
