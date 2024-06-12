import PropTypes from "prop-types";
import { useState } from "react";

CommentBody.propTypes = {
  comment: PropTypes.object,
  commentStat: PropTypes.string,
  setCommentStat: PropTypes.func,
  parentComment: PropTypes.object,
  updateComment: PropTypes.func,
  setActiveParentComment: PropTypes.func,
};

export default function CommentBody({
  comment,
  commentStat,
  setCommentStat,
  parentComment,
  updateComment,
  setActiveParentComment,
}) {
  const [commentText, setCommentText] = useState(comment.content);

  function onClickCancel() {
    setCommentStat("read");
    setActiveParentComment(null);
  }

  function onClickUpdate() {
    const updatedComment = { ...comment, content: commentText };
    const updatedParentComment = {
      ...parentComment,
      replies: parentComment.replies.filter((item) => item.id !== comment.id),
    };
    updatedParentComment.replies.push(updatedComment);
    updateComment(updatedParentComment);
    setCommentStat("read");
    setActiveParentComment(null);
  }

  let content;
  if (commentStat == "read" || commentStat == "reply")
    content = (
      <div className="comment-body">
        <p>
          <span>{comment?.replyingTo ? `@${comment?.replyingTo}` : ""}</span>{" "}
          {comment.content}
        </p>
      </div>
    );
  else
    content = (
      <div className="comment-body-edit">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <div className="edit-actions">
          <button className="button" onClick={onClickUpdate}>
            Update
          </button>
          <button className="button button-cancel" onClick={onClickCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  return content;
}
