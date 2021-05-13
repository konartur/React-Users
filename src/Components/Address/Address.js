import PropTypes from "prop-types";
import styles from "../Address/Address.module.scss";
import Geo from "../Geo.js";
function Address({ address }) {
  const { street, zipcode, city, suite, geo } = address;
  return (
    <div>
      <ul className={styles.address}>
        <li className="list__item">
          <span className={styles.span}>street: </span>
          {street}
        </li>
        <li className="list__item">
          <span className={styles.span}>zipcode: </span> {zipcode}
        </li>
        <li className="list__item">
          <span className={styles.span}>suite: </span> {suite}
        </li>
        <li className="list__item">
          <span className={styles.span}>city: </span> {city}
        </li>
        <Geo geo={geo} />
      </ul>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    suite: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    city: PropTypes.string,
  }),
};

export default Address;
