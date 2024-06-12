import PropTypes from "prop-types";
import NestedCommentContainer from "./NestedCommentContainer";

CommentRepliesContainer.propTypes = {
  comment: PropTypes.object,
  updateComment: PropTypes.func,
  currentUser: PropTypes.object,
  setShowDeleteConfirmation: PropTypes.func,
  setUpdatedComment: PropTypes.func,
  activeParentComment: PropTypes.object,
  setActiveParentComment: PropTypes.func,
};

export default function CommentRepliesContainer({
  comment,
  updateComment,
  currentUser,
  setShowDeleteConfirmation,
  setUpdatedComment,
  activeParentComment,
  setActiveParentComment,
}) {
  return (
    <div className="comment-replies-container">
      <div className="line-container">
        <div className="vertical-line"></div>
      </div>

      <div className="inner-comment-list">
        {comment.replies.map((reply, idx) => {
          return (
            <NestedCommentContainer
              key={idx}
              comment={reply}
              parentComment={comment}
              updateComment={updateComment}
              currentUser={currentUser}
              setShowDeleteConfirmation={setShowDeleteConfirmation}
              setUpdatedComment={setUpdatedComment}
              activeParentComment={activeParentComment}
              setActiveParentComment={setActiveParentComment}
            />
          );
        })}
      </div>
    </div>
  );
}
