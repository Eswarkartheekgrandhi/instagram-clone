import React, { useState } from "react";
import "./Login.css";
import { auth, signInWithEmailAndPassword } from "../firebase";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((err) =>
        alert(
          "Sorry, your password was incorrect. Please double-check your password."
        )
      );
  };

  return (
    <div className="login">
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={changeHandler}
        name="password"
      />
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Login;
