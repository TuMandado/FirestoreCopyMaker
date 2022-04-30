import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CheckboxList from "./components/CheckboxList";
import ButtonsActions from "./components/ButtonsActions";
import Home from "./pages/Home";
import StoreDetails from "./pages/StoreDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setCollections, setDatabases, setLoading } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCollections, editCollections } from "./firebase/collection";
import "./App.css";

function App() {
  // Get info from collections when the app is loaded.
  const dispatch = useDispatch();
  var collections = useSelector((state) => state.collections);
  var isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    getCollections().then((collections) => {
      dispatch(setCollections(collections));
    });
  }, []);

  // When collections are not null, isLoading is false, and the app is loaded
  useEffect(() => {
    if (collections && isLoading) {
      dispatch(setLoading(false));
    }
  }, [collections]);

  // When collections change, update the database and isLoading to true
  useEffect(() => {
    if (collections) {
      dispatch(setLoading(true));
      editCollections(collections).then(() => {
        dispatch(setLoading(false));
      });
    }
  }, [collections]);
  
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
