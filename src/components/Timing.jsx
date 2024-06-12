import PropTypes from "prop-types";

Timing.propTypes = {
  createdAt: PropTypes.string,
};

export default function Timing({ createdAt }) {
  return <p className="timing">{createdAt}</p>;
}
