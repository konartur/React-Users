import Title from "./Title/Title";
import Address from "./Address/Address";
import PropTypes from "prop-types";

function User({ user }) {
  return (
    <div>
      <Title name={user.name} username={user.username} email={user.email} />
      <Address address={user.address} />
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      suite: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      city: PropTypes.string,
    }),
  }),
};

export default User;
