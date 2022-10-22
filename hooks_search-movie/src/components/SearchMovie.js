//useState と useEffectをreactからimport
import { useState, useEffect } from "react";
//API通信はaxiosを使います
import axios from "axios";
//apikeyはそのまま書いちゃダメなのでenvに入れて呼び出します（他にいいやり方あるのかな？）
const apikey = process.env.REACT_APP_MOVIE_API_KEY;

const SearchMovie = word => {
  // 先ほどと同じようにMovieListにAPI通信結果をstate保持させていきます。
  const [movieList, setMovieList] = useState([]); // const [使用する変数の名前, 使用する関数の名前] = Reactのメソッド(stateにいれる最初の値)

  // 映画のリソースを取得する関数
  const fetchMovie = async word => { // async = 非同期関数を定義する関数宣言
    const response = await axios.get( // await = async function内でPromiseの結果（resolve、reject）が返されるまで待機する（処理を一時停止する）演算子
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${word}` // APIソース
      // 持ってきたwordはここのAPI処理に使われる
    );
    const data = response.data.results;
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
