import Title from './Title'
import Address from './Address'
import Geo from './Geo'
import PropTypes from 'prop-types';

function CardItem({name,username,email,address,className}) {
    return (
        <div className={className}>
            <Title 
            name={name}
            username={username}
            email={email}
            />
            <Address
                street={address.street}
                suite={address.suite}
                city={address.city}
                zipcode={address.zipcode}
            />
            <Geo 
                geo={address.geo}
            />
        </div>
    )
}

CardItem.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
}

export default CardItem;