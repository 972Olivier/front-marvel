import "./OneComics.css";
import { useLocation } from "react-router-dom";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const OneComics = ({ addComics, setAddComics, userToken }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const id = location.state.id;
  const picture = location.state.picture;
  const title = location.state.title;
  const description = location.state.description;

  // console.log(id, picture, title, description);
  if (!userToken) {
    navigate("/login");
  }

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
                  alert("Ce comics a été rajouté aux favoris");
                  navigate("/comics");
                } else {
                  let copy = addComics;
                  copy.push(comicsFav);
                  // console.log(copy);
                  setAddComics(copy);
                  let arrayComics = JSON.stringify(copy);
                  Cookies.set(`arrayComics`, arrayComics, { expires: 7 });
                  alert("Ce comics a été rajouté aux favoris");
                  navigate("/comics");
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
