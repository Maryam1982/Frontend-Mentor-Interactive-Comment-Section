import { useState } from "react";
import PropTypes from "prop-types";
import CommentCard from "./CommentCard";
import CommentReply from "./CommentReply";
import CommentRepliesContainer from "./CommentRepliesContainer";

CommentContainer.propTypes = {
  comment: PropTypes.object,
  setComments: PropTypes.func,
  updateComment: PropTypes.func,
  currentUser: PropTypes.object,
  setShowDeleteConfirmation: PropTypes.func,
  setUpdatedComment: PropTypes.func,
  activeParentComment: PropTypes.object,
  setActiveParentComment: PropTypes.func,
};

export default function CommentContainer({
  comment,
  setComments,
  updateComment,
  currentUser,
  setShowDeleteConfirmation,
  setUpdatedComment,
  activeParentComment,
  setActiveParentComment,
}) {
  const [commentStat, setCommentStat] = useState("read");

  return (
    <div className="comment-container">
      <CommentCard
        commentStat={commentStat}
        setCommentStat={setCommentStat}
        comment={comment}
        setComments={setComments}
        updateComment={updateComment}
        currentUser={currentUser}
        activeParentComment={activeParentComment}
        setActiveParentComment={setActiveParentComment}
      />
      {commentStat === "reply" && comment?.replies.length > 0 && (
        <CommentRepliesContainer
          comment={comment}
          setComments={setComments}
          updateComment={updateComment}
          currentUser={currentUser}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          setUpdatedComment={setUpdatedComment}
          activeParentComment={activeParentComment}
          setActiveParentComment={setActiveParentComment}
        />
      )}
      {commentStat === "reply" && (
        <CommentReply
          setComments={setComments}
          updateComment={updateComment}
          comment={comment}
          currentUser={currentUser}
          activeParentComment={activeParentComment}
        />
      )}
    </div>
  );
}
