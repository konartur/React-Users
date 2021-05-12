import CardItem from './CardItem';



function Card (props) {
        return (
                <div className="cards">
                {props.data.map(({id,name,username,email,address})=> 
                        <CardItem 
                                key={id}
                                className={(id%2 === 0) ? "card-item card-item-red" : "card-item card-item-blue"}                             
                                name={name}
                                username={username}
                                email={email}
                                address={address}
                        />  
                )}
                </div>
        )
};

export default Card;