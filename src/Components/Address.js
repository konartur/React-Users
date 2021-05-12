import PropTypes from 'prop-types';
import styles from '../Styles/Address.module.scss';
function Address({street,zipcode,suite,city,lat,lng}) {
    return (
        <div>
            <ul className={styles.address}>
                <li className="list__item"><span className={styles.span}>street: </span>{street}</li>
                <li className="list__item"><span className={styles.span}>zipcode: </span> {zipcode}</li>
                <li className="list__item"><span className={styles.span}>suite: </span> {suite}</li>
                <li className="list__item"><span className={styles.span}>city: </span> {city}</li>
                <li className="list__item">{lat}</li>
                <li className="list__item">{lng}</li>
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
    lat: PropTypes.string,
    lng: PropTypes.string
}

export default Address;