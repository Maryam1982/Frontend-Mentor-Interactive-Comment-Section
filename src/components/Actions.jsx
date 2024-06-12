import PropTypes from "prop-types";

Actions.propTypes = {
  comment: PropTypes.object,
  currentUser: PropTypes.object,
  commentStat: PropTypes.string,
  setShowDeleteConfirmation: PropTypes.func,
  setActiveParentComment: PropTypes.func,
  parentComment: PropTypes.object,
  setCommentStat: PropTypes.func,
  setUpdatedComment: PropTypes.func,
};

export default function Actions({
  comment,
  currentUser,
  commentStat,
  setShowDeleteConfirmation,
  setActiveParentComment,
  parentComment,
  setUpdatedComment,
  setCommentStat,
}) {
  // return <div>{children}</div>;
  function onClickDelete() {
    setShowDeleteConfirmation(true);
    const activeParentComment = !parentComment ? comment : parentComment;
    setActiveParentComment(activeParentComment);
    const updatedParentComment = {
      ...parentComment,
      replies: parentComment.replies.filter((item) => item.id !== comment.id),
    };
    setUpdatedComment(updatedParentComment);
  }

  function onClickEdit() {
    setCommentStat("edit");
    const activeParentComment = !parentComment ? comment : parentComment;
    setActiveParentComment(activeParentComment);
  }

  function onClickReply() {
    if (commentStat === "read") setCommentStat("reply");
    else if (commentStat === "reply") setCommentStat("read");
  }
  return (
    <div>
      {comment.user.username === currentUser.username ? (
        <>
          <button
            className={`action-btn-delete ${
              commentStat === "edit" ? "inactive" : ""
            }`}
            onClick={onClickDelete}
            disabled={commentStat === "edit"}
          >
            <img src="./images/icon-delete.svg" /> Delete
          </button>
          <button
            className={`action-btn-edit ${
              commentStat === "edit" ? "inactive" : ""
            }`}
            onClick={onClickEdit}
            disabled={commentStat === "edit"}
          >
            <img src="./images/icon-edit.svg" /> Edit
          </button>
        </>
      ) : (
        <button
          className={`action-btn-reply ${
            commentStat === "reply" ? "active" : ""
          }`}
          onClick={onClickReply}
        >
          <img src="./images/icon-reply.svg" /> Reply
        </button>
      )}
    </div>
  );
}
