// useStateはreactからimport
import React, { useState } from "react";
import MovieList from "./MovieList";

const App = () => {
  const [searchWord, setSearchWord] = useState("");
  const apikey = process.env.REACT_APP_MOVIE_API_KEY;

    // 入力された値をstate保持させる関数
    const handleChange = e => {
      setSearchWord(e.target.value);
    };

    //MovieListにsetSearchWordで保持したsearchWordを渡す
    return (
      <div>
        <input
          type="text"
          placeholder="SearchWord"
          //値が変わるたびにhandleChangeを動かす
          onChange={handleChange}
        />
        <MovieList word={searchWord} />
      </div>
    );
  };

  export default App;
