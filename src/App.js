import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Favoris from "./pages/Favoris/Favoris";
import { useState } from "react";

function App() {
  //to manage token character and token comics in favorite
  const [addCharacter, setAddCharacter] = useState([]);
  const [addComics, setAddComics] = useState([]);
  // const [data, setData] = useState("");
  // const [isLoading, setIsloading] = useState(true);

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/characters");
  //       console.log(response.data);
  //       setData(response.data);
  //       setIsloading(false);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };
  //   fetchdata();
  // }, []);
  // return isLoading ? (
  //   <span>En cours de chargement...</span>
  // ) :
  return (
    <div className="App">
      <Router>
        <Header
          addCharacter={addCharacter}
          setAddCharacter={setAddCharacter}
          addComics={addComics}
          setAddComics={setAddComics}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setAddCharacter={setAddCharacter}
                addCharacter={addCharacter}
              />
            }
          />
          <Route
            path="/character"
            element={
              <Character
                addCharacter={addCharacter}
                setAddCharacter={setAddCharacter}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics addComics={addComics} setAddComics={setAddComics} />
            }
          />
          <Route
            path="/favoris"
            element={
              <Favoris
                setAddCharacter={setAddCharacter}
                setAddComics={setAddComics}
                addComics={addComics}
                addCharacter={addCharacter}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
