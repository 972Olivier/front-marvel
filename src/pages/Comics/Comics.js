import "./Comics.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FiltersComics from "../../components/Filters-comics/FiltersComics";
import { Link, useNavigate } from "react-router-dom";
import groot from "../../assets/groot.gif";

const Comics = ({ userToken }) => {
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState("1");
  const [limit, setLimit] = useState(100);
  const navigate = useNavigate();

  if (!userToken) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://back-marvel.onrender.com/comics?title=${search}&skip=${skip}&limit=${limit}`
        );
        // console.log(response.data);
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
    <div className="isLoading">
      <div>
        <img src={groot} alt="Groot" />
      </div>
      {/* <span>En cours de chargement...</span> */}
    </div>
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
        {data.results.map((element, index) => {
          // console.log("element=>", element);
          return (
            <Link
              to="OneComics"
              state={{
                id: element._id,
                picture:
                  element.thumbnail.path + "." + element.thumbnail.extension,
                description: element.description,
                title: element.title,
              }}
            >
              <article className="article-comics" key={index}>
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
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Comics;
