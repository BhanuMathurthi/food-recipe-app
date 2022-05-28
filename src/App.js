import React, { useState } from "react";
import Products from "./components/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const APP_ID = "05bdf43a";
  const APP_KEY = "a880e13d8ab25f96287b2aa21e2117ed";

  function handleSubmit(e) {
    e.preventDefault();

    const exampleReq = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free
     `;
    fetch(exampleReq)
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  }

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  return (
    <div>
      <center>
        <h3 className="fs-2 text-dark mt-5">Food Recipe App</h3> <br />
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            size="20"
            className="mb-3"
            type="text"
            value={search}
            name=""
            id=""
          />{" "}
          <br />
          <input
            className="mb-5 btn btn-success"
            type="submit"
            value="search"
          />
        </form>
        {data.length > 1 && <Products data={data} />}
      </center>
    </div>
  );
}
