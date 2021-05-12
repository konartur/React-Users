import PropTypes from 'prop-types';

function Geo({lat,lng}) {
    return (
        <ul>
            <li className="list__item">{lat}</li>
            <li className="list__item">{lng}</li>
        </ul>
    )
}

Geo.propTypes = {
    lat: PropTypes.string,
    lng: PropTypes.string
}

export default Geo;