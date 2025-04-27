import state from "./redux/state";
import {addPost} from "./redux/state";
import {renderEntireTree} from "./render";


 renderEntireTree(state, addPost);
