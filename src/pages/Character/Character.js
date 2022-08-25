import "./Character.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Character = () => {
  const [ComicsData, setComicsData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const location = useLocation();
  // console.log(location.state);
  const data = location.state.data;
  const picture = location.state.picture;
  const name = location.state.name;
  const description = location.state.description;
  const id = data._id;
  // console.log(picture, name, description, id);
  // console.log("comics data ===>", ComicsData.comics);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/comics/${id}`);
        console.log(response.data);
        setComicsData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, [id]);

  // console.log(data.results);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <section className="comicsOfCharacter">
      <div className="characterDescription">
        <img src={picture} alt="character" />
        <div className="boxInCharacterDescription">
          <div>
            <span>{name}</span>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="comicsOflist">
        <p>Ce personnage apparaît dans le(s) comic(s) suivant(s) :</p>
      </div>
      <div className="comicsOf">
        {ComicsData.comics.map((element) => {
          // console.log("here=>", element);
          return (
            <article className="article-comics listComics">
              <div className="box-img">
                <img
                  src={
                    element.thumbnail.path + "." + element.thumbnail.extension
                  }
                  alt="Personnage"
                />
              </div>
              <div>
                <div className="description">
                  <span>{element.title}</span> <p>{element.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Character;
