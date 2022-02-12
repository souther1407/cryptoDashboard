import react from "react";
import styles from "../styles/Card.module.css"

class Card extends react.Component{

    
    render(){
        return (
        <div className={`${styles.card} ${styles[this.props.id]}`}>
            <img src={this.props.image} alt="img"/>
            <div className={styles.desc}>
                <p>{this.props.name}</p>
                <p className={this.props.dif < 0 ? styles.baja : styles.alza}>${this.props.current_price}</p>
            </div>
        </div>
        )
    }
}

export default Card;