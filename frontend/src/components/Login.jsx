import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "../utils/Form";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/auth/login", {
      username,
      password,
    });
    console.log(response);
    try {
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userId);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Login;
