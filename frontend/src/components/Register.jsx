import { useState } from "react";
import Form from "../utils/Form";
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/auth/register", {username, password})
    try{
      alert('Successfully Registered')
    }
    catch(err) {
      console.error(err);
    }
  }
  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Register;
