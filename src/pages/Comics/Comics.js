import "./Comics.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FiltersComics from "../../components/Filters-comics/FiltersComics";

const Comics = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState("1");
  const [limit, setLimit] = useState(100);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comics?title=${search}&skip=${skip}&limit=${limit}`
        );
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, [limit, skip, search]);

  // console.log(data.results);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <FiltersComics
        search={search}
        setSearch={setSearch}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
      />
      <section className="box-comics">
        {data.results.map((element) => {
          console.log(element);
          return (
            <article className="article-comics">
              <div>
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
      </section>
    </>
  );
};

export default Comics;
