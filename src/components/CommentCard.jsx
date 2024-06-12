import PropTypes from "prop-types";
import CommentHeader from "./CommentHeader";
import Rating from "./Rating";
import CommentBody from "./CommentBody";
import Actions from "./Actions";

CommentCard.propTypes = {
  commentStat: PropTypes.string,
  setCommentStat: PropTypes.func,
  comment: PropTypes.object,
  setComments: PropTypes.func,
  updateComment: PropTypes.func,
  parentComment: PropTypes.object,
  currentUser: PropTypes.object,
  setShowDeleteConfirmation: PropTypes.func,
  setUpdatedComment: PropTypes.func,
  activeParentComment: PropTypes.object,
  setActiveParentComment: PropTypes.func,
};

export default function CommentCard({
  commentStat,
  setCommentStat,
  comment,
  setComments,
  updateComment,
  parentComment = null,
  currentUser,
  setShowDeleteConfirmation,
  setUpdatedComment,
  activeParentComment,
  setActiveParentComment,
}) {
  return (
    <div
      className={`comment-layout ${
        commentStat === "edit" ? "edit-layout" : ""
      }`}
    >
      <div className="rating">
        <Rating
          comment={comment}
          updateComment={updateComment}
          parentComment={parentComment}
        />
      </div>
      <div className="header">
        <CommentHeader
          commentStat={commentStat}
          setCommentStat={setCommentStat}
          comment={comment}
          currentUser={currentUser}
          parentComment={parentComment}
          setUpdatedComment={setUpdatedComment}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          activeParentComment={activeParentComment}
          setActiveParentComment={setActiveParentComment}
        />
      </div>
      <div className="edit-actions">
        <Actions
          comment={comment}
          currentUser={currentUser}
          commentStat={commentStat}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          activeParentComment={activeParentComment}
          parentComment={parentComment}
          setUpdatedComment={setUpdatedComment}
          setCommentStat={setCommentStat}
          setActiveParentComment={setActiveParentComment}
        />
      </div>

      <div className="body">
        <CommentBody
          comment={comment}
          setComments={setComments}
          parentComment={parentComment}
          commentStat={commentStat}
          setCommentStat={setCommentStat}
          updateComment={updateComment}
          activeParentComment={activeParentComment}
          setActiveParentComment={setActiveParentComment}
        />
      </div>
    </div>
  );
}
