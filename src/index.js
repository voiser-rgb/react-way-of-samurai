import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateText, addMessage, updateMessage} from "./redux/state";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const renderEntireTree = (state) => {
	root.render(<React.StrictMode>
		<BrowserRouter>
			<App state={state} addPost={addPost} updateText={updateText} addMessage={addMessage}
				 updateMessage={updateMessage}/>
		</BrowserRouter>
	</React.StrictMode>);
}
renderEntireTree(state);
subscribe(renderEntireTree);