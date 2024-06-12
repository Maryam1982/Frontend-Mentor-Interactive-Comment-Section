import PropTypes from "prop-types";

User.propTypes = {
  user: PropTypes.object,
  currentUser: PropTypes.object,
};

export default function User({ user, currentUser }) {
  return (
    <div className="user-container">
      <img className="user-img" src={`${user.image.png}`} />
      <h3 className="user-name">{user.username}</h3>{" "}
      {currentUser?.username === user?.username && <div>you</div>}
    </div>
  );
}
