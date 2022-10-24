import React from "react";
import searchMovie from "./SearchMovie";
import MovieItem from "./MovieItem";

const MovieList = ({ word }) => { // // オブジェクト { word } を返す
  // searchWordを使ってsearchMovieメソッドを動かし、値をmovieListに代入
  const movieList = searchMovie(word);

  return (
    <div>
    <ul>
       // movieListに配列が返ってきているのでmap処理
      {movieList.map(movie => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  </div>
  );
};

export default MovieList;

// [MovieList.js]
// {movieList.map(movie => (   // movieListをループして表示している

