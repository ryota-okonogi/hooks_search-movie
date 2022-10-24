import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { apikey } from './lib/entity';

const container = document.getElementById('root');

// `/hoge?api_key=${process.env.DEMO_API_KEY}`
// `/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
// const appId = process.env.REACT_APP_MOVIE_API_KEY
// {process.env.REACT_APP_HELLO_WORLD}

// renderメソッドで、　「HTML(index.html)上にある'root'というidが振られているDOMを <App /> に置き換える」ということをやっている。

if (container) {
const root = createRoot(container);
    root.render(
        <StrictMode>
        <App />
        </StrictMode>
    );
}
