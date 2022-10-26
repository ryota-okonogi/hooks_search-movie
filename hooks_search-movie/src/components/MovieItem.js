import React from "react";

const MovieItem = ({ movie }) => {

  return (
    <li>
      <p>{movie.title}</p>
      <div>
        {movie.poster_path ? (
          <img
            className="movieImg"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        ) : (
          <p>NoImage</p>
        )}
      </div>
      <p>{movie.overview}</p>
    </li>
  );
};

export default MovieItem;

// [MovieItem.js]
// {movie.poster_path ? ()   // ここから<img>タグへの出力になる
// => 渡されたデータにposter_pathがあったら、${movie.poster_path}でポスター画像のパスをセットしている。
