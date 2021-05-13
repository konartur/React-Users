import PropTypes from "prop-types";

function Geo({ geo }) {
  const { lat, lng } = geo;
  return (
    <ul>
      <li className="list__item">{lat}</li>
      <li className="list__item">{lng}</li>
    </ul>
  );
}

Geo.propTypes = {
  geo: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string,
  }),
};

export default Geo;
