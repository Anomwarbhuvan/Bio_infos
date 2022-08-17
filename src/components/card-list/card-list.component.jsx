import { Component } from "react";
import './card-list-style.css';

import Card from '../card/card.component';


class CardList extends Component{

    render() {
    
        const { profs } = this.props;

        return (
            <div className='card-list'>
                {profs.map((prof) => {
                    return (
                        <Card prof={prof} />
                    );
                    
                    
                })}
                
            </div>
        );

    }


}
export default CardList;