import User from "./User";

function Card(props) {
  return (
    <div className="cards">
      {props.data.map((user) => (
        <div
          key={user.id}
          className={
            user.id % 2 === 0
              ? "card-item card-item-red"
              : "card-item card-item-blue"
          }
        >
          <User user={user} />
        </div>
      ))}
    </div>
  );
}

export default Card;
