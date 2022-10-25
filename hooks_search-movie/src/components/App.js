// useStateはreactからimport
import React, { useState } from "react";
import MovieList from "./MovieList";
// console.log(apikey);

const App = () => {
  const [searchWord, setSearchWord] = useState("");
  const apikey = process.env.REACT_APP_MOVIE_API_KEY; // 追加

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

/*

    <h1 style={{margin: "2em"}}>
      {process.env.REACT_APP_HELLO_WORLD}
    </h1>
{process.env.REACT_APP_MOVIE_API_KEY}

<API_KEY apikey={process.env.REACT_APP_MOVIE_API_KEY} />

API_KEY=apikey={process.env.REACT_APP_MOVIE_API_KEY}

        <input>
        apikey={process.env.REACT_APP_MOVIE_API_KEY}
        </input>
*/
