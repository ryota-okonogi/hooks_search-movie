// useStateはreactからimport
import React, { useState } from "react";
import MovieList from "./MovieList";

const App = () => {
  const [searchWord, setSearchWord] = useState(""); // const [使用する変数の名前, 使用する関数の名前] = Reactのメソッド(stateにいれる最初の値)
  const apikey = process.env.REACT_APP_MOVIE_API_KEY; // 定義する場所が超重要

    // 入力された値をstate保持させる関数
    const handleChange = e => { // e = イベント([例]クリック)
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
