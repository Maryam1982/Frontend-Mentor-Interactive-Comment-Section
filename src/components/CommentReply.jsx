import { useState } from "react";
import PropTypes from "prop-types";

CommentReply.propTypes = {
  comment: PropTypes.object,
  updateComment: PropTypes.func,
  currentUser: PropTypes.object,
  parentComment: PropTypes.object,
  activeParentComment: PropTypes.object,
};

export default function CommentReply({
  comment,
  updateComment,
  currentUser,
  parentComment,
  activeParentComment,
}) {
  const [commentText, setCommentText] = useState("");

  function onClickReply() {
    let newCommentReply;
    if (!parentComment) {
      newCommentReply = {
        id: crypto.randomUUID(),
        content: commentText,
        createdAt: "now",
        score: 0,
        user: currentUser,
        replies: [],
        replyingTo: comment.user.username,
      };
      const updatedComment = {
        ...comment,
        replies: [...comment.replies, newCommentReply],
      };
      updateComment(updatedComment);
    } else {
      newCommentReply = {
        id: crypto.randomUUID(),
        content: commentText,
        createdAt: "now",
        score: 0,
        user: currentUser,
        replyingTo: comment.user.username,
      };
      const updatedParentComment = {
        ...parentComment,
        replies: [...parentComment.replies, newCommentReply],
      };
      updateComment(updatedParentComment);
    }

    setCommentText("");
  }

  return (
    <div className="comment-reply">
      <img src={`${currentUser.image.png}`} />
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment ..."
      />

      <button
        className="button"
        onClick={onClickReply}
        disabled={
          activeParentComment && activeParentComment?.id !== parentComment?.id
        }
      >
        {parentComment ? "Reply" : "send"}
      </button>
    </div>
  );
}
