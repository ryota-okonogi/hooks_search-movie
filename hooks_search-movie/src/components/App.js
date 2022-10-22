// useStateはreactからimport
import React, { useState } from "react";
import MovieList from "./MovieList";

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
      </div>
    );
  };

  export default App;

/*



*/
