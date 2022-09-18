import "./Character.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Character = ({ setAddCharacter, addCharacter, userToken }) => {
  const navigate = useNavigate();
  const [ComicsData, setComicsData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const location = useLocation();
  // console.log(location.state);
  const data = location.state.data;
  const picture = location.state.picture;
  const name = location.state.name;
  const description = location.state.description;
  const id = data._id;

  if (!userToken) {
    navigate("/login");
  }

  // console.log(picture, name, description, id);
  // console.log("comics data ===>", ComicsData.comics);
  // console.log(addCharacter);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://my-back-marvel.herokuapp.com/comics/${id}`
        );
        // console.log(response.data);
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

          <button
            className="favorisAdd"
            onClick={() => {
              const characterFav = {
                picture,
                name,
                description,
                id,
              };
              // console.log("😉", characterFav);
              // if cookies exist
              const cookieExist = Cookies.get("arrayCharacter");
              if (cookieExist) {
                const cookie = JSON.parse(cookieExist);
                let copy = cookie;
                copy.push(characterFav);
                setAddCharacter(copy);
                let arrayCharacter = JSON.stringify(copy);
                Cookies.set(`arrayCharacter`, arrayCharacter, { expires: 7 });
                alert("Ce personnage a été rajouté aux favoris");
                navigate("/");
              } else {
                // if cookies doesn't exist
                let copy = addCharacter;
                copy.push(characterFav);
                // console.log(copy);
                setAddCharacter(copy);
                let arrayCharacter = JSON.stringify(copy);
                Cookies.set(`arrayCharacter`, arrayCharacter, { expires: 7 });
                alert("Ce personnage a été rajouté aux favoris");
                navigate("/");
              }
            }}
          >
            Rajouter aux favoris
          </button>
        </div>
      </div>

      <div className="comicsOflist">
        <p>Ce personnage apparaît dans le(s) comic(s) suivant(s) :</p>
      </div>
      <div className="comicsOf">
        {ComicsData.comics.map((element, index) => {
          // console.log("here=>", element);
          return (
            <article className="article-comics listComics" key={index}>
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
