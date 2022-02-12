
import react from "react";
import styles from "../styles/Nav.module.css"
import {FaSun,FaMoon} from "react-icons/fa"

class Nav extends react.Component{

    render(){
        return (
        <nav className={styles.nav}>
            
            <h1>Crypto Dashboard</h1>
            <button className={styles.btnObscuro} onClick={this.props.onSwitch}>{this.props.onObscuro() ? FaSun() : FaMoon()}</button>
            

        </nav>
        )
    }
}

export default Nav;