import React, { useState, useEffect } from "react";
import axios from "axios";
import Jokes from "./Jokes";

const Home = () => {
  const [state, setstate] = useState({
    jokes: [],
    category: "",
    categories: [],
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setstate({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`https://api.chucknorris.io/jokes/categories`)
      .then((res) => {
        console.log(res.data);
        setstate({
          ...state,
          categories: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { category, categories } = state;

  return (
    <>
      <div className="holder">
        <h3>Chuck Norris Jokes</h3>
        <select name="category" onChange={handleChange}>
          <option value="">Choose category</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
        <br /> <br />
        <Jokes category={category} />
      </div>
    </>
  );
};

export default Home;
