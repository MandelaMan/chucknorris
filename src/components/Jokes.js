import React, { useEffect, useState } from "react";
import axios from "axios";

const Jokes = ({ category }) => {
  const [state, setstate] = useState({
    joke: {},
  });

  useEffect(() => {
    axios
      .get(`https://api.chucknorris.io/jokes/random/category=${category}`)
      .then((res) => {
        console.log(res.data);
        setstate({
          ...state,
          joke: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { joke } = state;

  return <>{joke && <>{joke.value}</>}</>;
};

export default Jokes;
