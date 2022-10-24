// useStateはreactからimport
import React, { useState } from "react";
import MovieList from "./MovieList";

// const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
// console.log(API_KEY);

const App = () => {
  const [searchWord, setSearchWord] = useState("");

    // 入力された値をstate保持させる関数
    const handleChange = e => {
      setSearchWord(e.target.value);
    };

    return (
      <div>
        <input
          type="text"
          placeholder="SearchWord"
          //値が変わるたびにhandleChangeを動かす
          onChange={handleChange}
        />
        //MovieListにsetSearchWordで保持したsearchWordを渡す
        <MovieList word={searchWord} />
        {process.env.REACT_APP_MOVIE_API_KEY}
      </div>
    );
  };

  export default App;

/*

    <h1 style={{margin: "2em"}}>
      {process.env.REACT_APP_HELLO_WORLD}
    </h1>
{process.env.REACT_APP_MOVIE_API_KEY}

<API_KEY apikey={process.env.REACT_APP_MOVIE_API_KEY} />


        <input>
        apikey={process.env.REACT_APP_MOVIE_API_KEY}
        </input>
*/
