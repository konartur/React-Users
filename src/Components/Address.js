import PropTypes from 'prop-types';

function Adress({street,zipcode,suite,city}) {
    return (
        <div>
            <ul className="list">
                <li className="list__item">Street: {street}</li>
                <li className="list__item">zipcode: {zipcode}</li>
                <li className="list__item">suite: {suite}</li>
                <li className="list__item">city: {city}</li>
            </ul>
        </div>
    )
}

Adress.propTypes = {
    street: PropTypes.string,
    zipcode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),  
    suite: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    city: PropTypes.string
}

export default Adress;