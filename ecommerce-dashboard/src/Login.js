import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "./Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const history = useHistory();
  async function signIn() {
    let item = { email, password };
    console.warn(item);
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  }
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control "
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassowrd(e.target.value)}
          className="form-control "
        />
        <br />
        <button onClick={signIn} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
