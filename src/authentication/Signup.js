import React, { useState } from "react";
import "./Signup.css";
import { auth, createUserWithEmailAndPassword } from "../firebase";

function Signup() {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        autoComplete="off"
        type="email"
        placeholder="Email"
        value={email}
        onChange={changeHandler}
        name="email"
      />
      <input
        autoComplete="off"
        type="text"
        placeholder="Username"
        value={username}
        onChange={changeHandler}
        name="username"
      />
      <input
        autoComplete="off"
        type="password"
        placeholder="Password"
        value={password}
        onChange={changeHandler}
        name="password"
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default Signup;
