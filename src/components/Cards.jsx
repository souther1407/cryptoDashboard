import react from "react";
import styles from "../styles/Cards.module.css"
import Card from "./Card";

class Cards extends react.Component{

    render(){

        return (
            <div className={styles.cards}>

                {this.props.currencies.map(c=>{
                    
                    return <Card key={c.id} name={c.name} current_price={c.current_price} image={c.image} />
                })}

            </div>
        )
    }
}

export default Cards;


