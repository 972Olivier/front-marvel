import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Filters from "../../components/Filters/Filters";
import { Link, useNavigate } from "react-router-dom";
import groot from "../../assets/groot.gif";

const Home = ({ userToken }) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState("1");
  const [limit, setLimit] = useState(100);

  if (!userToken) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://back-marvel.onrender.com/characters?title=${search}&skip=${skip}&limit=${limit}`
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
      <Filters
        search={search}
        setSearch={setSearch}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
      />
      <section>
        {data.results.map((element, index) => {
          // console.log(element);
          return (
            <Link
              to="/character"
              state={{
                data: element,
                picture:
                  element.thumbnail.path + "." + element.thumbnail.extension,
                name: element.name,
                description: element.description,
              }}
            >
              <article key={index}>
                <div>
                  <img
                    src={
                      element.thumbnail.path + "." + element.thumbnail.extension
                    }
                    alt="Personnage"
                  />
                </div>
                <div>
                  <div className="home">
                    <span>{element.name}</span> <p>{element.description}</p>
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

export default Home;
