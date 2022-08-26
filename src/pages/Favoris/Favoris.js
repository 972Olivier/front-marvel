import Cookies from "js-cookie";
import "./Favoris.css";
// import { useEffect } from "react";

const Favoris = () => {
  const array = Cookies.get("arrayCharacter");
  let arrayOk = {};
  const arrayComics = Cookies.get("arrayComics");
  let arrayComicsOk = {};

  if (arrayComics) {
    arrayComicsOk = JSON.parse(arrayComics);
  }

  if (array) {
    arrayOk = JSON.parse(array);
    // console.log("ok=====>", arrayOk);
  }

  // console.log("arrayC=>", arrayComicsOk[0].picture);
  // if cookies exist
  // if (array) {
  // const arrayOk = JSON.parse(array);
  // console.log("ok=====>", arrayOk);
  return (
    <section className="box-favoris">
      {array ? (
        <div>
          <p>Personnage(s) favori(s)</p>
          <button className="favorisAdd">Delete</button>
          <article className="favoriteCharacter">
            {arrayOk.map((element) => {
              // console.log("element=>", element);
              return (
                <div className="box">
                  <div>
                    <img src={element.picture} alt="character" />
                  </div>
                  <div>
                    <span>{element.name}</span>
                    <p>{element.description}</p>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      ) : (
        <div>
          <p>Personnage(s) favori(s)</p>
          <button className="favorisAdd">Delete</button>
          <article className="favoriteCharacter"></article>
        </div>
      )}

      {arrayComics ? (
        <div>
          <p>Comics favori(s)</p>
          <button className="favorisAdd">Delete</button>
          <article className="favoriteComics">
            {arrayComicsOk.map((element) => {
              // console.log("element=>", element);
              return (
                <div className="box">
                  <div>
                    <img src={element.picture} alt="character" />
                  </div>
                  <div>
                    <span>{element.title}</span>
                    <p>{element.description}</p>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      ) : (
        <div>
          <p>Comics favori(s)</p>
          <button className="favorisAdd">Delete</button>
          <article className="favoriteComics"></article>
        </div>
      )}
    </section>
  );
  // }
  // else {
  //   //if cookies doesn't exist
  //   return (
  //     <section className="box-favoris">
  // <div>
  //   <p>Personnage(s) favori(s)</p>
  //   <article className="favoriteCharacter"></article>
  // </div>
  //       <div>
  //         <p>Comics favori(s)</p>
  //         <article className="favoriteComics"></article>
  //       </div>
  //     </section>
  //   );
  // }
};

export default Favoris;
