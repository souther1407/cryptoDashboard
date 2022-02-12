
import react from "react";
import styles from "../styles/Nav.module.css"


class Nav extends react.Component{

    render(){
        return (
        <nav className={styles.nav}>
            <h1 className={styles.title}>Title</h1>

        </nav>
        )
    }
}

export default Nav;