import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store.js";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


const renderEntireTree = () => {
	root.render(<React.StrictMode>
		<BrowserRouter>
			<App store={store}/>
		</BrowserRouter>
	</React.StrictMode>);
}
renderEntireTree();
store.subscribe(renderEntireTree);