import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ setToken, token }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = () => {
    if (name && username && email && description) {
      if (password === rePassword) {
        const param = { name, username, email, description, password };

        const fetchData = async () => {
          try {
            const response = await axios.post(
              "https://back-marvel.onrender.com/signup",
              // "http://localhost:3001/signup",
              param
            );
            Cookies.set("userToken", response.data.token, { expires: 7 });
            setToken(response.data.token);
            alert("inscription effectuée");
            navigate("/");
          } catch (error) {
            console.log(error.response);
            alert(error.response.data.error);
          }
        };
        fetchData();
      } else {
        alert("les mots de passes ne sont pas identiques !");
      }
    } else {
      alert("missing parameters");
    }
  };
  // console.log(data);
  return (
    <div className="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitForm();
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={rePassword}
          onChange={(event) => {
            setRePassword(event.target.value);
          }}
        />
        <button>Sign Up</button>
        <Link to={"/signin"}>
          <div className="containSignIn">
            <p className="signIn">Allready have an account</p>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
