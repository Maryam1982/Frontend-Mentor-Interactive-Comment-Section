import PropTypes from "prop-types";
import User from "./User";
import Timing from "./Timing";

CommentHeader.propTypes = {
  comment: PropTypes.object,
  currentUser: PropTypes.object,
};

export default function CommentHeader({ comment, currentUser }) {
  return (
    <div className="comment-header">
      <div className="comment-info">
        <User user={comment.user} currentUser={currentUser} />
        <Timing createdAt={comment.createdAt} />
      </div>
    </div>
  );
}
