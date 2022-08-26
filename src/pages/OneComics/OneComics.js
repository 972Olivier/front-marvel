import "./OneComics.css";
import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
import Cookies from "js-cookie";

const OneComics = ({ addComics, setAddComics }) => {
  // const [ComicsData, setComicsData] = useState("");
  // const [isLoading, setIsloading] = useState(true);
  const location = useLocation();

  const id = location.state.id;
  const picture = location.state.picture;
  const title = location.state.title;
  const description = location.state.description;

  console.log(id, picture, title, description);

  return (
    <section className="One">
      <div className="comicsOne">
        <div className="containDescription">
          <div>
            <span>{title}</span>
          </div>
          <div className="descriptionheigth">
            <p>{description}</p>
          </div>
          <div>
            <button
              className="favorisAdd"
              onClick={() => {
                const comicsFav = {
                  picture,
                  title,
                  description,
                  id,
                };
                // console.log(comicsFav);
                const cookieExist = Cookies.get("arrayComics");

                if (cookieExist) {
                  const cookie = JSON.parse(cookieExist);
                  let copy = cookie;
                  copy.push(comicsFav);
                  setAddComics(copy);
                  let arrayComics = JSON.stringify(copy);
                  Cookies.set(`arrayComics`, arrayComics, { expires: 7 });
                  alert("le comics est rajouté aux favoris");
                } else {
                  let copy = addComics;
                  copy.push(comicsFav);
                  // console.log(copy);
                  setAddComics(copy);
                  let arrayComics = JSON.stringify(copy);
                  Cookies.set(`arrayComics`, arrayComics, { expires: 7 });
                  alert("le comics est rajouté aux favoris");
                }
              }}
            >
              Rajouter aux favoris
            </button>
          </div>
        </div>
        <img src={picture} alt="comics" />
      </div>
    </section>
  );
};

export default OneComics;
