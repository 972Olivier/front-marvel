import "./FiltersComics.css";
import shield from "../../assets/shield.png";

const FiltersComics = ({
  search,
  setSearch,
  limit,
  setLimit,
  skip,
  setSkip,
}) => {
  console.log("filterComics===>", search, limit, skip);
  return (
    <div className="menu-filters">
      <div>
        <img src={shield} alt="shield captain america" />
      </div>
      <form>
        <div>
          <input
            className="search"
            placeholder="Rentrer votre recherche"
            type="search"
            name="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="articles">Nombre de fiches par page</label>
          <input
            placeholder="max 100"
            type="text"
            name=""
            id="articles"
            value={limit}
            onChange={(event) => {
              setLimit(event.target.value);
            }}
          />
          <label htmlFor="page">N°de page</label>
          <input
            type="text"
            name="page"
            id="page"
            value={skip}
            onChange={(event) => {
              setSkip(event.target.value);
            }}
          />
        </div>
      </form>
      <div>
        <img src={shield} alt="shield captain america" />
      </div>
    </div>
  );
};

export default FiltersComics;
