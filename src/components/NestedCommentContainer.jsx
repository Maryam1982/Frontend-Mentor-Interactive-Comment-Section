import { useState } from "react";
import PropTypes from "prop-types";
import CommentCard from "./CommentCard";
import CommentReply from "./CommentReply";

NestedCommentContainer.propTypes = {
  comment: PropTypes.object,
  parentComment: PropTypes.object,
  updateComment: PropTypes.func,
  currentUser: PropTypes.object,
  setShowDeleteConfirmation: PropTypes.func,
  setUpdatedComment: PropTypes.func,
  activeParentComment: PropTypes.object,
  setActiveParentComment: PropTypes.func,
};

export default function NestedCommentContainer({
  comment,
  parentComment,
  updateComment,
  currentUser,
  setShowDeleteConfirmation,
  setUpdatedComment,
  activeParentComment,
  setActiveParentComment,
}) {
  const [replyCommentStat, setReplyCommentStat] = useState("read");

  return (
    <div className="nested-comments">
      <CommentCard
        comment={comment}
        parentComment={parentComment}
        updateComment={updateComment}
        currentUser={currentUser}
        setCommentStat={setReplyCommentStat}
        commentStat={replyCommentStat}
        setShowDeleteConfirmation={setShowDeleteConfirmation}
        setUpdatedComment={setUpdatedComment}
        activeParentComment={activeParentComment}
        setActiveParentComment={setActiveParentComment}
      />
      {replyCommentStat === "reply" && (
        <CommentReply
          parentComment={parentComment}
          updateComment={updateComment}
          comment={comment}
          currentUser={currentUser}
          activeParentComment={activeParentComment}
        />
      )}
    </div>
  );
}
