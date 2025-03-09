import React from 'react';
import navModule from "./Navbar.module.css";

const Navbar = () => {
    return <nav className={navModule.nav}>;
        <div className ={`${navModule.item} ${navModule.active}`}>
            <a>Profile</a>
        </div>

        <div className ={navModule.item}>
            <a>Messages</a>
        </div>

        <div className ={navModule.item}>
            <a>News</a>
        </div>

        <div className ={navModule.item}>
            <a>Music</a>
        </div>

        <div className ={navModule.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;