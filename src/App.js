import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Favoris from "./pages/Favoris/Favoris";
import { useState } from "react";
import OneComics from "./pages/OneComics/OneComics";

function App() {
  //to manage cookies character and cookies comics in favorite
  const [addCharacter, setAddCharacter] = useState([]);
  const [addComics, setAddComics] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/character"
            element={
              <Character
                addCharacter={addCharacter}
                setAddCharacter={setAddCharacter}
              />
            }
          />
          <Route path="/comics" element={<Comics />} />
          <Route
            path="/comics/OneComics"
            element={
              <OneComics addComics={addComics} setAddComics={setAddComics} />
            }
          />

          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
