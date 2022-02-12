import react from "react";
import styles from "../styles/Card.module.css"

class Card extends react.Component{

    render(){
        return (
        <div className={`${styles.card} ${styles[this.props.name]}`}>
            <img src={this.props.image} alt="img"/>
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.current_price}</p>
            </div>
        </div>
        )
    }
}

export default Card;