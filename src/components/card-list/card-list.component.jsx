import './card-list-style.css';

import Card from '../card/card.component';


const CardList = ({ profs }) => (

    <div className='card-list'>
        {profs.map((prof) => {
            return <Card prof={prof} />;
                
        })}
    </div>
   
);
export default CardList;