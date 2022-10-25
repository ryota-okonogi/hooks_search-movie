//useState と useEffectをreactからimport
import { useState, useEffect } from "react";
import axios from "axios"; //API通信はaxiosを使う
const apikey = process.env.REACT_APP_MOVIE_API_KEY; // apikeyはそのまま書いちゃダメなのでenvに入れて呼び出す
// import { apikey } from "../lib/entity"; // 削除

const SearchMovie = word => {
  // 先ほどと同じようにMovieListにAPI通信結果をstate保持させていきます。
  const [movieList, setMovieList] = useState([]); // const [使用する変数の名前, 使用する関数の名前] = Reactのメソッド(stateにいれる最初の値)

  // 映画のリソースを取得する関数
  const fetchMovie = async word => { // async = 非同期関数を定義する関数宣言
    // const apikey = process.env.REACT_APP_MOVIE_API_KEY;
    // console.log(apikey);
    const response = await axios.get( // await = async function内でPromiseの結果（resolve、reject）が返されるまで待機する（処理を一時停止する）演算子
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${word}` // APIソース
      // 持ってきたwordはここのAPI処理に使われる
    );
    console.log(response);
    const data = response.data.results;
    // console.log(data);
    setMovieList(data);
    // APIで返る値をmoviesに保持
  };

  // useEffect(() => {fetchData(data);}, [data]); => // 第二引数に変数を与えると、最初のレンダリング時と変数の値が変更された時のみメソッドが動く。
  useEffect(() => {
    // レンダリングの後になんらかの処理を動作させるメソッド。
    fetchMovie(word);
  }, [word]);

  return movieList;
};

export default SearchMovie;

// 処理の流れ

// [SearchMovie.js]
// const SearchMovie = word => {}    // APIの検索結果を受け取る
/*
    const data = response.data.results;   // APIから返ってきたデータを
    setMovieList(data);                   // setMovieListを使ってMovieListにセット
*/

// [MovieList.js]
// {movieList.map(movie => (   // movieListをループして表示している

// [MovieItem.js]
// {movie.poster_path ? ()   // ここから<img>タグへの出力になる
// => 渡されたデータにposter_pathがあったら、${movie.poster_path}でポスター画像のパスをセットしている。

// (*) 検索結果からどのようなデータが返ってくるかは、
// 利用しているAPIのドキュメントがあるので「Responses」を確認する！
