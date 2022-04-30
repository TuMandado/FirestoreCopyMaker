import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // Header is a top bar with a title and a button to go to the home page.
  // The button is the firebase logo.
  // The firebase logo is imported from https://w7.pngwing.com/pngs/876/977/png-transparent-yellow-folder-firebase-cloud-messaging-computer-icons-google-cloud-messaging-angularjs-github-angle-triangle-orange.png
  // The top bar has a title that says "Firebase CopyMaker"
  // The bar has a white background, black text, and a black border.

  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "1px solid #000",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
          }}
        >
          Firebase CopyMaker
        </div>
        <Link to="/">
          <img
            src="https://w7.pngwing.com/pngs/876/977/png-transparent-yellow-folder-firebase-cloud-messaging-computer-icons-google-cloud-messaging-angularjs-github-angle-triangle-orange.png"
            alt="firebase logo"
            style={{
              height: "50px",
              width: "50px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
