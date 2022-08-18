
const Card = ({ prof }) => {
    const { id, name, email } = prof;

    return (

        <div className='card-container' key={id}>
            <img alt={`prof ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>


        </div>
    );
    
}

export default Card;