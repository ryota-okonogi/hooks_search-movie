import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');

// renderメソッドで、「HTML(index.html)上にある'root'というidが振られているDOMを <App /> に置き換える」ということをやっている。
if (container) {
const root = createRoot(container);
    root.render(
        <StrictMode>
        <App />
        </StrictMode>
    );
}
