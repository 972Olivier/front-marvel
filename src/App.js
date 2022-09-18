import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Favoris from "./pages/Favoris/Favoris";
import { useState } from "react";
import OneComics from "./pages/OneComics/OneComics";
import Login from "./pages/LogIn/Login";
import Signin from "./pages/signIn/SignIn";
import Cookies from "js-cookie";

function App() {
  // const navigate = useNavigate();
  //to manage cookies character and cookies comics in favorite
  const [addCharacter, setAddCharacter] = useState([]);
  const [addComics, setAddComics] = useState([]);
  const [token, setToken] = useState("");
  const userToken = Cookies.get("userToken");
  // console.log("userToken: ", userToken);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home userToken={userToken} />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} token={token} />}
          />
          <Route
            path="/signin"
            element={<Signin setToken={setToken} token={token} />}
          />

          <Route
            path="/character"
            element={
              <Character
                addCharacter={addCharacter}
                setAddCharacter={setAddCharacter}
                userToken={userToken}
              />
            }
          />
          <Route path="/comics" element={<Comics userToken={userToken} />} />
          <Route
            path="/comics/OneComics"
            element={
              <OneComics
                addComics={addComics}
                setAddComics={setAddComics}
                userToken={userToken}
              />
            }
          />

          <Route path="/favoris" element={<Favoris />} userToken={userToken} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
