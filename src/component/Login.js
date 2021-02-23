import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/counter/loginSlice";
import data from "../data/userData.json";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    if (data.userName === user && data.password === password) {
      history.push("/users");
      dispatch(login());
      window.sessionStorage.setItem("login", true);
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Nectar App</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Log in
          </button>
        </form>

        <p>
          By continuing, you agree to the Xero-Bill's{" "}
          <b>Terms of Service, Privacy Policy</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
