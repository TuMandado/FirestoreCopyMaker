import React from "react";
import { useParams } from "react-router";

function StoreDetails() {
  const uid = useParams().userId;
  return (
    <div>
        <h1>StoreDetails</h1>
        <p>userId: {uid}</p>
    </div>
    );
}

export default StoreDetails;
