import PropTypes from 'prop-types';
function Geo({geo}) {
    return (
        <div>
            <ul className="list">
                <li className="list__item">{geo.lat}</li>
                <li className="list__item">{geo.lng}</li>
            </ul>
        </div>
    )
}

Geo.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number
}

export default Geo;