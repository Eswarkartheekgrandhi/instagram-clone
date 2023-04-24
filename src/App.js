import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";
import { auth } from "./firebase";

function App() {
  const [presentUser, setPresentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user.displayName,
          email: user.email,
        });
      } else {
        setPresentUser(null);
      }
    });
  });
  return (
    <div className="app">{presentUser ? <Homepage /> : <Authentication />}</div>
  );
}

export default App;
