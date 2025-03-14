import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return <nav className={styles.nav}>;
        <div className ={`${styles.item} ${styles.active}`}>
            <a href="/Profile">Profile</a>
        </div>

        <div className ={styles.item}>
            <a href="/Dialogs">Messages</a>
        </div>

        <div className ={styles.item}>
            <a href="/News">News</a>
        </div>

        <div className ={styles.item}>
            <a href="/Music">Music</a>
        </div>

        <div className ={styles.item}>
            <a href="/Settings">Settings</a>
        </div>
    </nav>
}

export default Navbar;