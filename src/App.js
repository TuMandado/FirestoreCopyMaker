import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { createAppAndDb, getAllCollectionsFromPetShop } from "./firebase";
import logo from "./logo.svg";
import "./App.css";
import CheckboxList from "./components/CheckboxList";
import ButtonsActions from "./components/ButtonsActions";


function App() {
  const [firebaseConfigAlreadySet, setFirebaseConfigAlreadySet] =
    useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyAcHKVuiISpf0Lq0RtyJoB-B2wSy8LwrHE",
    authDomain: "petshop-35b9a.firebaseapp.com",
    projectId: "petshop-35b9a",
    storageBucket: "petshop-35b9a.appspot.com",
    messagingSenderId: "744953839990",
    appId: "1:744953839990:web:08431cdfb31ee4a323fa57",
    measurementId: "G-44018Q639M",
  };

  // useEffect(() => {
  //   getAllCollectionsFromPetShop().then((result) => {
  //     console.log("result:", result);
  //   }
  //   );
  // }, []);
  // Return a list next to each other
  return (
    <div style={
      // Set elementes in the middle
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    }>
      <header style={
        // Bit title of the app
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          fontSize: "2rem",
          fontWeight: "bold",
          color: "black",
          padding: "1rem",
          borderRadius: "1rem",

          marginBottom: "1rem",

        }
    
      }
      >
        <img src={logo} className="App-logo" alt="logo" 
        style={
          {
            height: "5rem",
          }
        }
        />
        <p>
          Sync your Firebase data with the PetShop database.
        </p>
      </header>

    <div style={{ display: "flex", flexDirection: "row" }}>
      <CheckboxList />
      <CheckboxList />
    </div>
    <ButtonsActions />
    <ButtonsActions />
    </div>
  );
}

export default App;
