import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIN = ({ setToken, token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log("token", token);
  const submitForm = () => {
    if (email && password) {
      const fetchData = async () => {
        const param = { email, password };
        try {
          const response = await axios.post(
            "https://back-marvel.onrender.com/signin",
            // "http://localhost:3001/signin",
            param
          );
          // console.log("responsedata==", response.data);
          if (typeof response.data === "object") {
            Cookies.set("userToken", response.data.token, { expires: 7 });
            setToken(response.data.token);
            alert("connexion réussie");
            navigate("/");
          } else {
            alert(`${response.data}`);
          }
        } catch (error) {
          console.log(error.response);
          alert(error.response.data.error);
        }
      };
      fetchData();
    } else {
      alert("missing parameters");
    }
  };

  return (
    <div className="login">
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitForm();
          }}
        >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button>Connexion</button>
          <Link to={"/login"}>
            <div className="containSignIn">
              <p className="signIn">create an account</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIN;
