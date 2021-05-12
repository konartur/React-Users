import PropTypes from 'prop-types';
import styles from '../Address/Address.module.scss';
import Geo from '../Geo.js'
function Address({street,zipcode,suite,city,geo}) {
    return (
        <div>
            <ul className={styles.address}>
                <li className="list__item"><span className={styles.span}>street: </span>{street}</li>
                <li className="list__item"><span className={styles.span}>zipcode: </span> {zipcode}</li>
                <li className="list__item"><span className={styles.span}>suite: </span> {suite}</li>
                <li className="list__item"><span className={styles.span}>city: </span> {city}</li>
                <Geo 
                    lat={geo.lat}
                    lng={geo.lng}
                />
            </ul>
        </div>
    )
}

Address.propTypes = {
    street: PropTypes.string,
    zipcode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),  
    suite: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    city: PropTypes.string,
}

export default Address;