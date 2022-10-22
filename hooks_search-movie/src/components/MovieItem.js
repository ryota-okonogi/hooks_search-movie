import React from "react";


const MovieItem = ({ movie }) => {

  return (
    <li>
      <p>{movie.title}</p>
      <div>
        // 画像無い場合はNoImageと表示（画像用意するの面倒だった）
        {movie.poster_path ? (
          <img
            className={movieImg}
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        ) : (
          <p>NoImage</p>
        )}

      <p>{movie.overview}</p>
    </li>
  );
};

export default MovieItem;
