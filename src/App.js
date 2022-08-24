import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Favoris from "./pages/Favoris/Favoris";

function App() {
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
