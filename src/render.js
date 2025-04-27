import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";




const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

export const renderEntireTree = (state, addPost) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App  state={state} addPost={addPost}/>
			</BrowserRouter>
		</React.StrictMode>
	);
}

