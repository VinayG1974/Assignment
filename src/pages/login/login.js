import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";
import { strings } from "../../constants/fileWithConstants";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("user", username);
      navigate("/");
    } else {
      alert("Please fill in both username and password");
    }
  };

  return (
    <div className={"mainContainer"}>
      <form onSubmit={handleLogin}>
        <div className={"titleContainer"}>
          <div>{strings.LOGIN}</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={username}
            placeholder="Enter user name here"
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />
        <button className="buttonContainer" type="submit">
          {strings.LOGIN}
        </button>
      </form>
    </div>
  );
}

export default Login;
